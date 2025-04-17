import { displayUsername } from "../../ui/components/display.js";
import { authGuard } from "../../utils/authGuard.js";


authGuard();
displayUsername();

