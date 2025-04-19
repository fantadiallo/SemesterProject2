import PetsAPI from "../../api/petsApi/petsApi";


export async function ondeletePet(petId, cardElement) {
  try {
    const api = new PetsAPI();
    await api.deletePet(petId);
    cardElement.remove(); // removes the pet card from UI
  } catch (err) {
    console.error("Error deleting pet:", err);
    alert("Failed to delete pet.");
  }
}
