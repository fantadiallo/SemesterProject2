import { load } from "../../utils/storage/localstorage";

/**
 * Displays the current user's username inside a given container element.
 *
 * @param {string} [containerId="profile-Container"] - The ID of the container to render the username into.
 */
export function displayUsername(containerId = "profile-Container") {
  const user = load("user");
  const container = document.getElementById(containerId);

  if (!container) return;

  if (user?.name) {
    container.innerHTML = `<h2 class="fw-bold">@${user.name}</h2>`;
  } else {
    container.innerHTML = `<p class="text-muted">No user found</p>`;
  }
}
