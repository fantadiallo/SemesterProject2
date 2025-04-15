// In edit-pet-view.js
import PetsAPI from "../../api/petsApi/petsApi";
const petsApi = new PetsAPI();

export function handleUpdatePet(event, petId) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const petData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    description: formData.get("description"),
  };

  petsApi.updatePet(petId, petData)
    .then(response => {
      alert("Pet updated successfully!");
      window.location.href = `/profile/`;  // Redirect after success
    })
    .catch(error => {
      console.error("Error updating pet:", error);
      alert("Failed to update pet. Please try again.");
    });
}
