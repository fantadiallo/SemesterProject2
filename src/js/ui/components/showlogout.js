import { currentUser } from "../../utils/storage/user";

/**
 * Displays or hides the logout link based on the user's authentication status.
 * Assumes the logout link element has the ID "logoutLink" and is hidden using the "d-none" class.
 */
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
