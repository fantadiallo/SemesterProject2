import PetsAPI from "../../api/petsApi/petsApi.js";
import { createPetCard } from "../components/createPetCards.js";
import { renderPagination } from "../components/renderPagination.js";

const petsApi = new PetsAPI();
const petsPerPage = 12;

/**
 * Renders a paginated list of pet cards to the target element.
 * Supports optional search filtering.
 *
 * @param {HTMLElement} targetElement - The DOM element to render the pet cards into.
 * @param {number} [page=1] - The current page number for pagination.
 * @param {string} [searchQuery=''] - Optional search query to filter pets by name or other criteria.
 * @returns {Promise<void>}
 */
export async function onListings(targetElement, page = 1, searchQuery = '') {
  targetElement.innerHTML = "";

  try {
    const allPets = searchQuery 
      ? await petsApi.searchPets(searchQuery)
      : await petsApi.getAllPets();

    if (!allPets || !allPets.length) {
      targetElement.innerHTML = "<p class='text-center'>No pets found.</p>";
      return;
    }

    const start = (page - 1) * petsPerPage;
    const end = start + petsPerPage;
    const paginatedPets = allPets.slice(start, end);

    paginatedPets.forEach(pet => {
      const card = createPetCard(pet);
      targetElement.appendChild(card);
    });

    renderPagination(allPets.length, page, petsPerPage, onListings);
  } catch (error) {
    console.error("Error in onListings:", error);
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;
  }
}
