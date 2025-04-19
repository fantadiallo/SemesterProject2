import PetsAPI from "../../api/petsApi/petsApi";

/**
 * Deletes a pet by its ID and removes the corresponding card element from the UI.
 *
 * @param {string} petId - The unique ID of the pet to be deleted.
 * @param {HTMLElement} cardElement - The DOM element representing the pet card to remove from the UI.
 * @returns {Promise<void>}
 */
export async function ondeletePet(petId, cardElement) {
  try {
    const api = new PetsAPI();
    await api.deletePet(petId);
    cardElement.remove();
  } catch (err) {
    console.error("Error deleting pet:", err);
    alert("Failed to delete pet.");
  }
}
