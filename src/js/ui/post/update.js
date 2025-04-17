import PetsAPI from "../../api/petsApi/petsApi.js";
const petsApi = new PetsAPI();

export async function OnUpdatePet(event, petId) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const listingsData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    size: formData.get("size"),
    color: formData.get("color"),
    location: formData.get("location"),
    description: formData.get("description"),
    adoptionStatus: formData.get("adoptionStatus") || "Available",
    image: {
      url: formData.get("image-url"),
      alt: formData.get("image-alt"),
    },
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
