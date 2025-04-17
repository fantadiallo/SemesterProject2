
import PetsAPI from "../../api/petsApi/petsApi";
const petsApi = new PetsAPI();

export function ondeletePet(petId) {
  if (confirm("Are you sure you want to delete this pet?")) {
    petsApi.deletePet(petId)
      .then(() => {
        alert("Pet deleted successfully!");
        // Reload the page or update the pet list dynamically
        window.location.reload();  // Reload to refresh the pet list
      })
      .catch(error => {
        console.error("Error deleting pet:", error);
        alert("Failed to delete pet. Please try again.");
      });
  }
}
