import PetsAPI from "../../api/petsApi/petsApi.js";
const petsApi = new PetsAPI();

export function onCreatePet(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const petData = {
    name: formData.get("name"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    size: formData.get("size"),
    color: formData.get("color"),
    description: formData.get("description"),
    adoptionStatus: formData.get("adoptionStatus") || "Available",
    location: formData.get("location"),
    image: {
      url: formData.get("image-url"),
      alt: formData.get("image-alt"),
    }
  };

  petsApi.createPet(petData)
    .then(() => {
      alert("Pet created successfully!");
      window.location.href = "/profile/";
    })
    .catch(error => {
      console.error("Error creating pet:", error);
      alert("Failed to create pet. Please try again.");
    });
}
