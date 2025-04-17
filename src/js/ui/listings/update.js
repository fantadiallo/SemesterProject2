import PetsAPI from "../../api/petsApi/petsApi.js";
const petsApi = new PetsAPI();

export async function OnUpdatePet(event, petId) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const listingsData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: formData.get("age"),
    description: formData.get("description"),
    location: formData.get("location"),
  };

  try {
    await petsApi.updatePet(petId, listingsData);
    alert("Pet updated successfully!");
    window.location.reload();
  } catch (error) {
    console.error("Could not update pet:", error);
    alert("Failed to update pet.");
  }
}
