
export function createPetCard(pet) {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const imageUrl = pet.image?.url || "https://placehold.co/400x300";
  const imageAlt = pet.image?.alt || pet.name;

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

        <a href="/pet/index.html?id=${pet.id}" class="btn btn-outline-primary mt-3 w-100">View Details</a>
      </div>
    </div>
  `;

  return card;
}
