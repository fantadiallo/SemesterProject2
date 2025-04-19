/**
 * Attaches a submit event listener to the search form and triggers filtered listings.
 *
 * @param {Function} onListings - Callback function to render filtered pet listings based on search input.
 */
export function SearchFilter(onListings) {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = searchInput.value.trim();
    onListings(document.getElementById("pet-list"), 1, searchQuery);
  });
}
