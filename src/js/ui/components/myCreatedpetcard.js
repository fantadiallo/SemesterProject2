import { ondeletePet } from "../listings/delete";
import { openEditModal } from "../modals/openEditModal";

export function myCreatedPetcard(pets) {
  const container = document.createElement("div");
  container.classList.add("pet-cards-wrapper");

  pets.forEach(pet => {
    const card = document.createElement("div");
    card.classList.add("pet-card", "card", "p-3", "mb-3", "shadow-sm");
    card.dataset.id = pet.id;

    card.innerHTML = `
      <h5>${pet.name}</h5>
      <p><strong>Species:</strong> ${pet.species}</p>
      <p><strong>Breed:</strong> ${pet.breed}</p>
      <p><strong>Age:</strong> ${pet.age}</p>
      <p><strong>Location:</strong> ${pet.location}</p>
      <p>${pet.description}</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-sm btn-warning edit-pet-btn">Edit</button>
        <button class="btn btn-sm btn-danger delete-pet-btn">Delete</button>
      </div>
    `;

    const editBtn = card.querySelector(".edit-pet-btn");
    const deleteBtn = card.querySelector(".delete-pet-btn");

    editBtn.addEventListener("click", () => openEditModal(pet, card));

    deleteBtn.addEventListener("click", () => {
      if (confirm(`Delete ${pet.name}?`)) {
        ondeletePet(pet.id).then(() => card.remove());
      }
    });

    container.appendChild(card);
  });

  return container;
}
