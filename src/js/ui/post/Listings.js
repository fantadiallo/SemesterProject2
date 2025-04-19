import PetsAPI from "../../api/petsApi/petsApi.js";
import { createPetCard } from "../components/createPetCards.js";
import { hideLoader, showLoader } from "../components/loader.js";
import { renderPagination } from "../components/renderPagination.js";

const petsApi = new PetsAPI();
const petsPerPage = 12;

/**
 * Renders a list of pets on the target element with pagination.
 * @param {HTMLElement} targetElement - The DOM element where the pet cards will be rendered.
 * @param {number} [page=1] - The current page number for pagination.
 * @param {string} [searchQuery=''] - The search query to filter pets (optional).
 * @returns {Promise<void>} - Resolves when the pets are rendered.
 */
export async function onListings(targetElement, page = 1, searchQuery = '') {
  showLoader();  // Show loader when fetching data
  targetElement.innerHTML = "";

  try {
    const allPets = searchQuery 
      ? await petsApi.searchPets(searchQuery)  // Fetch pets based on search query
      : await petsApi.getAllPets();  // Fetch all pets if no search query

    if (!allPets || !allPets.length) {
      targetElement.innerHTML = "<p class='text-center'>No pets found.</p>";  // Show no pets found message
      return;
    }

    const start = (page - 1) * petsPerPage;
    const end = start + petsPerPage;
    const paginatedPets = allPets.slice(start, end);

    paginatedPets.forEach(pet => {
      const card = createPetCard(pet);
      targetElement.appendChild(card);  // Render pet cards
    });

    renderPagination(allPets.length, page, petsPerPage, onListings);  // Render pagination controls

  } catch (error) {
    console.error("Error in onListings:", error);
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;  // Error message
  } finally {
    hideLoader();  // Hide loader once the data is processed
  }
}


