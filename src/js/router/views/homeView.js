import { hideLoader, showLoader } from "../../ui/components/loader";
import { SearchFilter } from "../../ui/components/search";
import { onListings } from "../../ui/post/Listings";

export default async function renderHomePage() {
  const petList = document.getElementById("pet-list");

  if (!petList) {
    console.error("Element with id 'pet-list' not found in the DOM.");
    return;
  }
  showLoader();

  try {
 
    await onListings(petList, 1);
    SearchFilter(onListings);
  } catch (error) {
    console.error("Failed to load pets:", error);
    petList.innerHTML = "<p>Something went wrong while loading pets. Please try again later.</p>";
  } finally {
    hideLoader();
  }
  
}