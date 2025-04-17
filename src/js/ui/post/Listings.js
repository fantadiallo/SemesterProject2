import PetsAPI from "../../api/petsApi/petsApi.js";
import { createPetCard } from "../components/createPetCards.js";
import { renderPagination } from "../components/renderPagination.js";

const petsApi = new PetsAPI();
const petsPerPage = 12;

export async function onListings(targetElement, page = 1, searchQuery = '') {
  targetElement.innerHTML = "";

  try {
    const allPets = searchQuery 
      ? await petsApi.searchPets(searchQuery)  // If there is a search query, filter pets
      : await petsApi.getAllPets();  // If no search query, fetch all pets

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

    renderPagination(allPets.length, page, petsPerPage, onListings);  // Pass `onListings` to handle pagination
  } catch (error) {
    console.error("Error in onListings:", error);
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;
  }
}
