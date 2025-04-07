import { onListings } from "../../ui/listings/Listings";


export default async function renderHomePage() {
  const petList = document.getElementById("pet-list");
  petList.innerHTML = "";
  await onListings(petList);
}
