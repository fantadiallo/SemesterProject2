/**
 * Renders pagination controls (Previous/Next buttons) based on total items and current page.
 *
 * @param {number} totalItems - Total number of items available.
 * @param {number} currentPage - The current page number.
 * @param {number} petsPerPage - Number of items to display per page.
 * @param {Function} onListings - Callback function to re-render listings for the selected page.
 */
export function renderPagination(totalItems, currentPage, petsPerPage, onListings) {
  const paginationEl = document.getElementById("pagination");
  if (!paginationEl) return;

  const totalPages = Math.ceil(totalItems / petsPerPage);
  paginationEl.innerHTML = "";

  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-outline-secondary me-2";
    prevBtn.textContent = "Previous";
    prevBtn.onclick = () =>
      onListings(document.getElementById("pet-list"), currentPage - 1);
    paginationEl.appendChild(prevBtn);
  }

  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-outline-primary";
    nextBtn.textContent = "Next";
    nextBtn.onclick = () =>
      onListings(document.getElementById("pet-list"), currentPage + 1);
    paginationEl.appendChild(nextBtn);
  }
}

