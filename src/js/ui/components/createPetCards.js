import { ROUTES } from "../../utils/storage/Constans";
import { currentUser } from "../../utils/storage/user";
import { ondeletePet } from "../post/delete";

/**
 * Creates a pet card DOM element for displaying a pet's details.
 * Includes Edit and Delete buttons if the current user is the owner.
 *
 * @param {Object} pet - The pet data object.
 * @param {string} pet.id - Unique identifier for the pet.
 * @param {string} pet.name - Name of the pet.
 * @param {string} pet.species - Species of the pet.
 * @param {string} pet.breed - Breed of the pet.
 * @param {number} pet.age - Age of the pet in years.
 * @param {string} pet.gender - Gender of the pet.
 * @param {string} pet.size - Size category of the pet.
 * @param {string} pet.color - Color of the pet.
 * @param {string} pet.location - Location of the pet.
 * @param {string} pet.description - Description of the pet.
 * @param {string} pet.adoptionStatus - Adoption status (e.g., "Available", "Adopted").
 * @param {Object} [pet.image] - Optional image data.
 * @param {string} [pet.image.url] - URL of the pet's image.
 * @param {string} [pet.image.alt] - Alt text for the image.
 * @param {string} pet.owner - ID of the pet owner (used to check edit/delete permission).
 * @returns {HTMLElement} The constructed pet card element.
 */
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
        ondeletePet(pet.id, card);
      }
    });
  }

  return card;
}
