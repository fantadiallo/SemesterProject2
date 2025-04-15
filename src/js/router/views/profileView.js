import { populateUpdateForm } from "../../ui/components/populate";
import { createProfileCard } from "../../ui/components/updateProfileCard";
import { onUpdateProfile } from "../../ui/profile/update";
import { readProfile } from "../../ui/read/read";
import { authGuard } from "../../utils/authGuard";




const form = document.forms.updateProfile; // Target the form by name
if (form) {
  form.addEventListener("submit", onUpdateProfile);
}




createProfileCard()
authGuard()
readProfile();
onUpdateProfile()
populateUpdateForm()