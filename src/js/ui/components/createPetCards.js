import { ROUTES } from "../../utils/storage/Constans";
import { currentUser } from "../../utils/storage/user";
import { ondeletePet } from "../post/delete";

export function createPetCard(pet) {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const imageUrl = pet.image?.url || "https://placehold.co/400x300";
  const imageAlt = pet.image?.alt || pet.name;
  const detailLink = `${ROUTES.PET_DETAILS}?id=${pet.id}`;
  const editLink = `${ROUTES.PET_EDIT}?id=${pet.id}`;

  const user = currentUser();
  const isOwner = user?.sub === pet.owner;

  card.innerHTML = `
    <div class="card h-100 shadow-sm pet-card d-flex flex-column">
      <img src="${imageUrl}" class="card-img-top" alt="${imageAlt}" />

      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text small text-muted mb-1">
          <strong>${pet.breed}</strong> • ${pet.species} • ${pet.age}y • ${pet.size}
        </p>
        <p class="card-text small text-muted mb-1">${pet.color} • ${pet.gender}</p>
        <p class="card-text small mb-2">${pet.description}</p>
        <p class="badge bg-info text-dark">${pet.adoptionStatus}</p>
        <p class="text-muted small mt-auto">Location: ${pet.location}</p>

        <a href="${detailLink}" class="btn btn-outline-primary mt-3 w-100">View Details</a>

        ${isOwner ? `
          <a href="${editLink}" class="btn btn-warning mt-2 w-100">Edit</a>
          <button class="btn btn-danger mt-2 w-100" data-id="${pet.id}">Delete</button>
        ` : ""}
      </div>
    </div>
  `;

  if (isOwner) {
    const deleteBtn = card.querySelector("[data-id]");
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(`Are you sure you want to delete "${pet.name}"?`);
      if (confirmDelete) {
        ondeletePet(pet.id, card); // Pass the card to remove it from DOM after delete
      }
    });
  }

  return card;
}

