/**
 * Displays the loading overlay by adding the "active" class.
 * Targets an element with ID "loader-overlay".
 */
export function showLoader() {
  const overlay = document.getElementById("loader-overlay");
  if (overlay) {
    overlay.classList.add("active");
  }
}

/**
 * Hides the loading overlay by removing the "active" class.
 * Targets an element with ID "loader-overlay".
 */
export function hideLoader() {
  const overlay = document.getElementById("loader-overlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
}
