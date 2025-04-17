my
const petsApi = new PetsAPI();

export async function loadUserPets() {
  const user = load("user");
  if (!user) return;

  try {
    const container = document.querySelector(".myCreatedpets");
    if (!container) return;

    container.innerHTML = "";

    const pets = await petsApi.readListings(user.name); // Gets only user's pets

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
