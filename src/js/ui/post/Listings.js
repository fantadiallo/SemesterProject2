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
  showLoader();
  targetElement.innerHTML = "";

  try {
    // Fetch pets based on search query or get all pets
    const allPets = searchQuery 
      ? await petsApi.searchPets(searchQuery)  
      : await petsApi.getAllPets();  

    // Handle case where no pets are found
    if (!allPets || !allPets.length) {
      targetElement.innerHTML = "<p class='text-center'>No pets found.</p>";
      return;
    }

    // Paginate the pets
    const start = (page - 1) * petsPerPage;
    const end = start + petsPerPage;
    const paginatedPets = allPets.slice(start, end);

    // Render each pet card
    paginatedPets.forEach(pet => {
      const card = createPetCard(pet);
      targetElement.appendChild(card);
    });

    // Render pagination controls
    renderPagination(allPets.length, page, petsPerPage, onListings);  

  } catch (error) {
    console.error("Error in onListings:", error);
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;
  } finally {
    hideLoader();
  }
}
