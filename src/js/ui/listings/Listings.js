import PetsAPI from "../../api/petsApi/petsApi";
import { createPetCard } from "../components/createPetCards";
import { renderPagination } from "../components/renderPagination.js";

const petsApi = new PetsAPI();
const petsPerPage = 12;

export async function onListings(targetElement, page = 1) {
  targetElement.innerHTML = "";

  try {
    const allPets = await petsApi.getAllPets();
    console.log("API Response:", allPets);

    if (!allPets || !allPets.length) {
      targetElement.innerHTML = "<p class='text-center'>No pets available.</p>";
      return;
    }

    const start = (page - 1) * petsPerPage;
    const end = start + petsPerPage;
    const paginatedPets = allPets.slice(start, end);

    paginatedPets.forEach(pet => {
      const card = createPetCard(pet);
      if (!card || !(card instanceof HTMLElement)) {
        console.error("Invalid card element:", card);
      }
      targetElement.appendChild(card);
    });

 if (document.getElementById("pagination")) {
  renderPagination(allPets.length, page, petsPerPage);
}} catch (error) {
    console.error("Error in onListings:", error);
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;
  }
}
