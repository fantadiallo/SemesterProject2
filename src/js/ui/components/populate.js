import profileApi from "../../api/profile/profile";
import * as storage from "../../utils/storage/localStorage";

const api = new profileApi();

/**
 * Populates the profile update form with the current user's data.
 * Fetches profile details and fills in the form fields if available.
 *
 * @returns {Promise<void>}
 */
export async function populateUpdateForm() {
  const user = storage.load("user");
  const username = user.name;

  try {
    const profile = await api.profile.read(username);

    const nameInput = document.getElementById("name");
    const bioInput = document.getElementById("bio");
    const avatarUrlInput = document.getElementById("avatar-url");
    const avatarAltInput = document.getElementById("avatar-alt");
    const bannerUrlInput = document.getElementById("banner-url");
    const bannerAltInput = document.getElementById("banner-alt");

    if (nameInput) nameInput.value = profile.name || "";
    if (bioInput) bioInput.value = profile.bio || "";
    if (avatarUrlInput) avatarUrlInput.value = profile.avatar?.url || "";
    if (avatarAltInput) avatarAltInput.value = profile.avatar?.alt || "";
    if (bannerUrlInput) bannerUrlInput.value = profile.banner?.url || "";
    if (bannerAltInput) bannerAltInput.value = profile.banner?.alt || "";
  } catch {
    alert("Unable to fetch profile data. Please try again later.");
  }
}

