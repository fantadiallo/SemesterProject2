# Pet Adoption Platform 🐾

This is my Semester Project 2 – a responsive pet adoption website built using **Vanilla JavaScript**, **Bootstrap 5**, and the **Noroff API v2**. I created both the public and admin sides of the app, where users can browse and search for pets, and logged-in users (admins) can create, edit, or delete pet listings.

Everything is connected to the live API, and I’ve used localStorage for auth, custom components for modularity, and added UX features like a loader, pagination, modals, and live image previews. I also made sure the layout works well on both mobile and desktop.

---

## Live Site

**[Visit the Live Site on Netlify](https://your-app-name.netlify.app)**

---

## Features

### For all users
- View a grid of pets available for adoption
- Search pets by name, breed, or species
- Click a pet to see its details (image, breed, age, etc.)
- Get a shareable URL for each pet page

### For logged-in users (admins)
- Register and log in
- Create new pets (form with image preview)
- Edit existing pets (with prefilled fields)
- Delete pets
- View all your pets on your profile

---

## Pages

| Page                  | Path                         | Description                          |
|-----------------------|------------------------------|--------------------------------------|
| Home                  | `/index.html`                | Lists all pets with search + pagination |
| Pet Details           | `/pet/index.html?id={id}`    | Shows full info of a selected pet    |
| Create Pet            | `/pet/create.html`           | Form to add a new pet (admin only)   |
| Edit Pet              | `modal `                      | Update pet info or delete it  modal       |
| Profile               | `/profile/index.html`        | User's own pet listings              |
| Login / Register      | `/auth/login.html` / `/auth/register.html` | Auth with the Noroff API |

---

## How to Run It Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/semester-project-2.git
cd semester-project-2
