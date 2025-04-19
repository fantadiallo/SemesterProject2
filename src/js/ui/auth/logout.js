import { remove } from "../../utils/storage/localStorage.js";

export function onLogout() {
  const confirmed = confirm("Are you sure you want to sign out?");
  if (!confirmed) {
    alert("Sign out canceled");
    return;
  }

  try {
    remove("token");
    remove("user");
    alert("You have logged out!");
    window.location.href = "/auth/login.html"; // ✅ make sure path is correct
  } catch (error) {
    console.error("Logout failed:", error);
    alert("Could not sign out. Please try again.");
  }
}
