
import PetsAPI from "../../api/petsApi/petsApi.js";
import { hideLoader, showLoader } from "../../ui/components/loader.js";

const api = new PetsAPI();

export async function renderPetDetails() {
  const petDetailsContainer = document.getElementById("petDetails");
  const params = new URLSearchParams(window.location.search);
  const petId = params.get("id");

  if (!petId) {
    petDetailsContainer.innerHTML = `<p class="text-danger">No pet ID found in URL.</p>`;
    return;
  }

  try {
    showLoader();
    const pet = await api.getPetById(petId);

    if (!pet) {
      petDetailsContainer.innerHTML = `<p class="text-danger">Pet not found.</p>`;
      return;
    }

    const imageUrl = pet.image?.url?.trim() || "https://placehold.co/600x400?text=No+Image";
    const imageAlt = pet.image?.alt?.trim() || pet.name || "Pet image";

    petDetailsContainer.innerHTML = `
      <div class="card shadow-lg border-0">
        <div class="row g-0">
          <div class="col-md-6">
        <img
  src="${imageUrl}"
  alt="${imageAlt}"
  onerror="this.src='https://placehold.co/600x400?text=Image+Not+Found';"
  class="img-fluid rounded-start w-100 h-100 object-fit-cover"
/>          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h2 class="card-title fw-bold">${pet.name || "Unnamed Pet"}</h2>
              <p class="text-muted mb-1"><strong>${pet.breed || "Unknown breed"}</strong></p>
              <p class="mb-2">${pet.description || "No description available."}</p>
              <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item"><strong>Species:</strong> ${pet.species || "-"}</li>
                <li class="list-group-item"><strong>Age:</strong> ${pet.age ? pet.age + " years" : "-"}</li>
                <li class="list-group-item"><strong>Gender:</strong> ${pet.gender || "-"}</li>
                <li class="list-group-item"><strong>Color:</strong> ${pet.color || "-"}</li>
                <li class="list-group-item"><strong>Size:</strong> ${pet.size || "-"}</li>
                <li class="list-group-item"><strong>Location:</strong> ${pet.location || "-"}</li>
                <li class="list-group-item"><strong>Status:</strong> <span class="badge bg-success">${pet.adoptionStatus || "Available"}</span></li>
              </ul>
              <button id="shareButton" class="btn btn-outline-secondary w-100 mt-2">
                <i class="fas fa-share"></i> Share Pet
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Failed to fetch pet details:", error);
    petDetailsContainer.innerHTML = `<p class="text-danger">Something went wrong. Please try again later.</p>`;
  } finally {
    hideLoader();
  }
}
