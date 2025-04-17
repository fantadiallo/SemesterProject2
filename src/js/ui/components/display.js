import { load } from "../../utils/storage/localStorage";

export function displayUsername(containerId = "profile-Container") {
  console.log("📦 Loading user for display...");

  const user = load("user");
  console.log("👤 User from storage:", user);

  const container = document.getElementById(containerId);
  if (!container) {
    console.error("❌ Container not found:", containerId);
    return;
  }

  if (user?.name) {
    container.innerHTML = `<h2 class="fw-bold">@${user.name}</h2>`;
  } else {
    container.innerHTML = `<p class="text-muted">No user found</p>`;
  }
}
