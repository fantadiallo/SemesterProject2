import petsApi from

const petsApi = new PetsAPI();

export async function onListings(targetElement) {
  targetElement.innerHTML = "";

  try {
    const pets = await petsApi.getAllPets();

    if (!pets.length) {
      targetElement.innerHTML = "<p class='text-center'>No pets available.</p>";
      return;
    }

    pets.forEach(pet => {
      const card = createPetCard(pet);
      targetElement.appendChild(card);
    });
  } catch (error) {
    targetElement.innerHTML = `<p class="text-danger text-center">Something went wrong while loading pets.</p>`;
  }
}
