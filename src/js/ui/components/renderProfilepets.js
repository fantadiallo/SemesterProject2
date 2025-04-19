import PetsAPI from "../../api/petsApi/petsApi";
import { currentUser } from "../../utils/storage/user";
import { createPetCard } from "./createPetCards";

const api = new PetsAPI();

export async function renderProfilePets() {
  const petList = document.getElementById("myPets");
  const user = currentUser();

  if (!user) {
    petList.innerHTML = `<p class="text-danger">You must be logged in to view your pets.</p>`;
    return;
  }

  try {
    const allPets = await api.getAllPets();
    const userPets = allPets.filter(p => p.owner?.name === user.name);

    if (!userPets.length) {
      petList.innerHTML = `<p class="text-muted">You haven't added any pets yet.</p>`;
      return;
    }

    userPets.forEach(pet => {
      const card = createPetCard(pet);
      petList.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load pets:", error);
    petList.innerHTML = `<p class="text-danger">Error loading your pets.</p>`;
  }
}
