import { displayUsername } from "../../ui/components/display.js";
import { renderProfilePets } from "../../ui/components/renderProfilepets.js";
import { OnUpdatePet } from "../../ui/post/update.js";
import { loadUserPets } from "../../ui/read/readListings.js";
import { authGuard } from "../../utils/authGuard.js";

const form = document.getElementById("editPetForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const petId = document.getElementById("pet-id").value;
    OnUpdatePet(e, petId);
  });
}

authGuard(() => {
  displayUsername();
  loadUserPets();
  renderProfilePets();
});
