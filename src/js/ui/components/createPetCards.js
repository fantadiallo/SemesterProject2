import { ROUTES } from "../../utils/storage/Constans";
import { currentUser } from "../../utils/storage/user";
import { ondeletePet } from "../post/delete";

/**
 * Creates a pet card DOM element for displaying a pet's details.
 * Includes Edit and Delete buttons if the current user is the owner.
 *
 * @param {Object} pet - The pet data object.
 * @returns {HTMLElement} The constructed pet card element.
 */
export function createPetCard(pet) {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const imageUrl = pet.image?.url || "https://placehold.co/400x300";
  const imageAlt = pet.image?.alt || pet.name;
  const detailLink = `${ROUTES.PET_DETAILS}?id=${pet.id}`;

  const user = currentUser();
  const isOwner = user?.name === pet.owner?.name; // ✅ Fixed comparison

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
          <button class="btn btn-warning mt-2 w-100 edit-pet-btn" data-id="${pet.id}">Edit</button>
          <button class="btn btn-danger mt-2 w-100 delete-pet-btn" data-id="${pet.id}">Delete</button>
        ` : ""}
      </div>
    </div>
  `;

  if (isOwner) {
    // DELETE
    const deleteBtn = card.querySelector(".delete-pet-btn");
    deleteBtn.addEventListener("click", () => {
      const confirmDelete = confirm(`Are you sure you want to delete "${pet.name}"?`);
      if (confirmDelete) {
        ondeletePet(pet.id, card);
      }
    });

    // EDIT
    const editBtn = card.querySelector(".edit-pet-btn");
    editBtn.addEventListener("click", () => {
      document.getElementById("pet-id").value = pet.id;
      document.getElementById("pet-name").value = pet.name || "";
      document.getElementById("pet-species").value = pet.species || "";
      document.getElementById("pet-breed").value = pet.breed || "";
      document.getElementById("pet-age").value = pet.age || "";
      document.getElementById("pet-gender").value = pet.gender || "";
      document.getElementById("pet-size").value = pet.size || "";
      document.getElementById("pet-color").value = pet.color || "";
      document.getElementById("pet-location").value = pet.location || "";
      document.getElementById("pet-description").value = pet.description || "";
      document.getElementById("adoptionStatus").value = pet.adoptionStatus || "Available";
      document.getElementById("image-url").value = pet.image?.url || "";
      document.getElementById("image-alt").value = pet.image?.alt || "";

      const modal = new bootstrap.Modal(document.getElementById("editPetModal"));
      modal.show();
    });
  }

  return card;
}
