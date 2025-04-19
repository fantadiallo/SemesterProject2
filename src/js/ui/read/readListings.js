
import PetsAPI from "../../api/petsApi/petsApi.js";
import { load } from "../../utils/storage/localStorage.js";
import { mycreatePetCard } from "../components/mycreatedpets.js";

const petsApi = new PetsAPI();

/**
 * Loads and displays the pets created by the currently logged-in user.
 * Renders the pet cards inside the `.myCreatedpets` container.
 *
 * @returns {Promise<void>}
 */
export async function loadUserPets() {
  const user = load("user");
  if (!user) return;

  try {
    const container = document.querySelector(".myCreatedpets");
    if (!container) return;

    container.innerHTML = "";

    const pets = await petsApi.readListings(user.name);

    if (pets.length === 0) {
      container.innerHTML = `<p class="text-muted">You haven't listed any pets yet.</p>`;
    } else {
      pets.forEach(pet => {
        const card = mycreatePetCard(pet);
        container.appendChild(card);
      });
    }

  } catch (error) {
    console.error("Failed to load user pets:", error);
  }
}
