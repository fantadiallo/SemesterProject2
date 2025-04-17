
import { displayUsername } from "../../ui/components/display.js";
import { renderMyPets } from "../../ui/components/myCreatedpetcard.js";
import { onCreatePet } from "../../ui/listings/create.js";
import { authGuard } from "../../utils/authGuard.js";

console.log("✅ profileView.js loaded");
console.log("🔥 profileView.js loaded");


const createForm = document.getElementById("create-pet-form");
if (createForm) {
    createForm.addEventListener("submit", onCreatePet);
}


authGuard();
displayUsername();
renderMyPets(); // This will render the username
