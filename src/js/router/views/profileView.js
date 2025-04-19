import { displayUsername } from "../../ui/components/display.js";
import { renderProfilePets } from "../../ui/components/renderProfilepets.js";
import { loadUserPets } from "../../ui/read/readListings.js";
import { authGuard } from "../../utils/authGuard.js";

authGuard();
displayUsername();
loadUserPets();
renderProfilePets();
