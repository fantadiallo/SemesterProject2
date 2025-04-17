export function renderPagination(totalItems, currentPage, petsPerPage, onListings) {
  const paginationEl = document.getElementById("pagination");

  if (!paginationEl) {
    console.error("Pagination element not found!");
    return;
  }

  const totalPages = Math.ceil(totalItems / petsPerPage);
  paginationEl.innerHTML = ""; 


  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "btn btn-outline-secondary me-2";
    prevBtn.textContent = "Previous";
    prevBtn.onclick = () =>
      onListings(document.getElementById("pet-list"), currentPage - 1);  // Pass updated page to onListings
    paginationEl.appendChild(prevBtn);
  }


  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-outline-primary";
    nextBtn.textContent = "Next";
    nextBtn.onclick = () =>
      onListings(document.getElementById("pet-list"), currentPage + 1);  // Pass updated page to onListings
    paginationEl.appendChild(nextBtn);
  }
}
