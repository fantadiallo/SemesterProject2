import PetsAPI from "../../api/petsApi/petsApi.js";
const petsApi = new PetsAPI();

/**
 * Handles the form submission to update an existing pet listing.
 *
 * @param {Event} event - The form submission event.
 * @param {string} petId - The unique identifier of the pet to update.
 * @returns {Promise<void>}
 */
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

    const messageBox = document.getElementById("successMessage");
    messageBox.classList.remove("d-none");

    setTimeout(() => {
      messageBox.classList.add("d-none");
      window.location.href = "/profile/index.html";
    }, 3000);

  } catch (error) {
    console.error("Could not update pet:", error);
    alert("Failed to update pet.");
  }
}
