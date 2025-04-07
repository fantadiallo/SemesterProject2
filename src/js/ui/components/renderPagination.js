export function renderPagination(totalItems, currentPage, petsPerPage) {
    const paginationEl = document.getElementById("pagination");
  
    // Debugging line to check if pagination element is found
    if (!paginationEl) {
      console.error("Pagination element not found!");
      return;  // Exit early if pagination element doesn't exist
    }
  
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
  
