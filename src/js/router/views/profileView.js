
import { displayUsername } from "../../ui/components/display.js";
import { authGuard } from "../../utils/authGuard.js";

console.log("✅ profileView.js loaded");
console.log("🔥 profileView.js loaded");

authGuard();
displayUsername(); // This will render the username
