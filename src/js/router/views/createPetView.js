import { authGuard } from "../../utils/authGuard.js";
import { onCreatePet } from "../../ui/post/create";

authGuard();
const form = document.forms.CreatePet;

form.addEventListener("submit", onCreatePet)