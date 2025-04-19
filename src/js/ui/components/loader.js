export function showLoader() {
  const overlay = document.getElementById("loader-overlay");
  if (overlay) {
    overlay.classList.add("active");
  }
}

export function hideLoader() {
  const overlay = document.getElementById("loader-overlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
}
