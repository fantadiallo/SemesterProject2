import PetsAPI from "../../api/petsApi/petsApi.js";
import { load } from "../../utils/storage/localStorage.js";

const petsApi = new PetsAPI();
const user = load("user");

export async function onCreatePet(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const petData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    size: formData.get("size"),
    color: formData.get("color"),
    location: formData.get("location"),
    description: formData.get("description"),
    adoptionStatus: formData.get("adoptionStatus") || "Available",
    image: {
      url: formData.get("image-url"),
      alt: formData.get("image-alt"),
    },
  };

  try {
    const createdPet = await petsApi.createPet(petData);
    alert("Pet added successfully!");
    form.reset();
  } catch (error) {
    console.error("Error adding pet:", error);
    alert("Failed to add pet. Please try again.");
  }
}

