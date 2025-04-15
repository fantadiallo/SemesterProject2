import profileApi from "../../api/profile/profile";
import { userId } from "../../utils/storage/Constans";
import * as storage from "../../utils/storage/localStorage";
import { createProfileCard } from "../components/updateProfileCard";

const api = new profileApi();
const user = storage.load("user");
const username = location.pathname === "/profile/" && user ? user.name : userId;

console.log("📦 readProfile loaded");

export async function readProfile() {
  console.log("📥 reading profile...");
  try {
    const response = await api.profile.read(username);
    console.log("✅ Response from API:", response);

    if (response?.data) {
      const profile = response.data;
      console.log("👤 Loaded profile:", profile);
      createProfileCard(profile);
    } else {
      console.error("⚠️ Profile data missing", response);
    }
  } catch (error) {
    console.error("❌ Error in readProfile:", error);
  }
}
