import { currentUser } from "../../utils/storage/user";


export function showLogoutLink() {
  const logoutLink = document.getElementById("logoutLink");
  const user = currentUser();

  if (logoutLink) {
    if (user) {
      logoutLink.classList.remove("d-none"); 
    } else {
      logoutLink.classList.add("d-none"); 
    }
  }
}
