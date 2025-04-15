// In create-pet-view.js
import PetsAPI from "../../api/petsApi/petsApi";  // Adjust the path
const petsApi = new PetsAPI();

export function handleCreatePet(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const petData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    description: formData.get("description"),
  };

  petsApi.createPet(petData)
    .then(response => {
      alert("Pet created successfully!");
      window.location.href = "/profile/"; // Redirect to the profile page after success
    })
    .catch(error => {
      console.error("Error creating pet:", error);
      alert("Failed to create pet. Please try again.");
    });
}
