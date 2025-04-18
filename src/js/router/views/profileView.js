import { displayUsername } from "../../ui/components/display.js";
import { loadUserPets } from "../../ui/read/readListings.js";
import { authGuard } from "../../utils/authGuard.js";


authGuard();
displayUsername();
loadUserPets();

