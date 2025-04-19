import './scss/main.scss';
import router from "./js/router/index.js";
import { showLogoutLink } from './js/ui/components/showlogout.js';
import { onLogout } from './js/ui/auth/logout.js';

await router(window.location.pathname);
console.log("JS is working ✅");
showLogoutLink();
const logoutLink = document.getElementById("logoutLink");
if (logoutLink) {
  logoutLink.addEventListener("click", onLogout);
}



