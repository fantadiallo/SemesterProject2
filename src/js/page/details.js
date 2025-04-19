import { params } from "../utils/storage/Constans";


const petId = params.get("id");

if (!petId) {
  document.getElementById("petDetails").innerHTML = `<p>No pet ID found in URL.</p>`;
  return;
}
