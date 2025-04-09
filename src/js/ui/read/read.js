import profileApi from "../../api/profile/profile";
import { userId } from "../../utils/storage/Constans";
import *as storage from "../../utils/storage/localStorage";



profileApi
const api = new ProfileAPI();
const user = storage.load("user");


const username = location.pathname === "/profile/" && user ? user.name : userId;

// Log for debugging
console.log("Loaded user:", user);
console.log("Dynamic Username:", username);

export async function readProfile() {
  try {
    // Use the dynamically determined username
    const response = await api.profile.read(username);

    if (response?.data) {
      const profile = response.data;
      createProfileCard(profile); // Create the profile card
    } else {
      console.error("Profile data is missing:", response);
      document.getElementById("profile-container").textContent = "Failed to load profile.";
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    document.getElementById("profile-container").textContent =
      "An error occurred while loading the profile. Please try again later.";
  }
}
