

export function SearchFilter(onListings) {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
  
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchQuery = searchInput.value.trim();
      onListings(document.getElementById("pet-list"), 1, searchQuery);  // Call onListings with the search query
    });
  }
  