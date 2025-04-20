import { displayUsername } from "../../ui/components/display.js";
import { hideLoader, showLoader } from "../../ui/components/loader.js";
import { renderProfilePets } from "../../ui/components/renderProfilepets.js";
import { OnUpdatePet } from "../../ui/post/update.js";
import { loadUserPets } from "../../ui/read/readListings.js";
import { authGuard } from "../../utils/authGuard.js";
showLoader
const form = document.getElementById("editPetForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const petId = document.getElementById("pet-id").value;
    OnUpdatePet(e, petId);
  });
}

authGuard(async () => {
  try {
    showLoader();
    displayUsername();
    await loadUserPets();      
    await renderProfilePets(); 
  } catch (err) {
    console.error("Error loading profile data:", err);
  } finally {
    hideLoader();
  }
});

