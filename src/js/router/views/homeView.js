
export default async function renderHomePage() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";
  await onListings(petList);
}

const pets = await petsApi.getAllPets(); // ✅ no FormData needed
