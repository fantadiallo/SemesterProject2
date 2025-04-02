export function createPetCard(pet) {
  const card = document.createElement("div");
  card.className = "col-12 col-sm-6 col-md-4 col-lg-3";

  const inner = `
    <div class="card h-100 shadow-sm">
      <img src="${pet.image?.url || 'https://placehold.co/400x300'}"
           class="card-img-top"
           alt="${pet.image?.alt || pet.name}" />
      <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text text-muted">${pet.breed} • ${pet.species} • ${pet.age} years</p>
        <a href="/pet/index.html?id=${pet.id}" class="btn btn-outline-primary w-100">View</a>
      </div>
    </div>
  `;

  card.innerHTML = inner;
  return card;
}
