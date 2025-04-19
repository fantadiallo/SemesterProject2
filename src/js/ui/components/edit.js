import PetsAPI from "../../api/petsApi/petsApi.js";
import { params } from "../../utils/storage/Constans.js";
import { OnUpdatePet } from "../post/update.js";

const api = new PetsAPI();
const petId = params.get("id");


export async function renderEditPetPage() {
    const form = document.getElementById("editPetForm");
    if (!form || !petId) return;
  
    try {
      const pet = await api.getPetById(petId);
  
      form["pet-name"].value = pet.name || "";
      form["pet-species"].value = pet.species || "";
      form["pet-breed"].value = pet.breed || "";
      form["pet-age"].value = pet.age || "";
      form["pet-gender"].value = pet.gender || "";
      form["pet-size"].value = pet.size || "";
      form["pet-color"].value = pet.color || "";
      form["pet-location"].value = pet.location || "";
      form["pet-description"].value = pet.description || "";
      form["adoptionStatus"].value = pet.adoptionStatus || "Available";
      form["image-url"].value = pet.image?.url || "";
      form["image-alt"].value = pet.image?.alt || "";
  
      // ✅ Live image preview
      const imageUrlInput = document.getElementById("image-url");
      const previewImage = document.getElementById("previewImage");
  
      imageUrlInput.addEventListener("input", () => {
        previewImage.src = imageUrlInput.value || "https://placehold.co/300x200";
      });
  
      // ✅ Form submit
      form.addEventListener("submit", (e) => OnUpdatePet(e, petId));
    } catch (error) {
      console.error("Error loading pet:", error);
    }
}
