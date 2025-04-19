import profileApi from "../../api/profile/profile";
import { userId } from "../../utils/storage/Constans";
import * as storage from "../../utils/storage/localStorage";
import { createProfileCard } from "../components/updateProfileCard";

const api = new profileApi();
const user = storage.load("user");
const username = location.pathname === "/profile/" && user ? user.name : userId;

/**
 * Fetches and renders the user's profile using the API and creates the profile card.
 * 
 * @returns {Promise<void>}
 */
export async function readProfile() {
  try {
    const response = await api.profile.read(username);

    if (response?.data) {
      createProfileCard(response.data);
    }
  } catch (error) {
    console.error("Error loading profile:", error);
  }
}
