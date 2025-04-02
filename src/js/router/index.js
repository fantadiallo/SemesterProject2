export default async function router(pathname = window.location.pathname) {
    console.log("routing to:", pathname);

    switch (pathname) {
        case "/":
            case "/index.html":
              const { default: renderHomePage } = await import("./views/homeView.js");
              renderHomePage();
              break;

        case "/auth/register":
        case "/auth/register.html":
            await import("./views/registerView.js"); // Corrected path
            break;

        case "/auth/login":
        case "/auth/login.html":
            await import("./views/loginView.js");
            break;

        case "/pet/create":
        case "/pet/create.html":
            await import("./views/createPetView.js");
            break;

        case "/pet/details":
        case "/pet/index.html":
            await import("./views/petDetailsView.js");
            break;

        case "/pet/edit":
        case "/pet/edit.html":
            await import("./views/editPetView.js");
            break;

        case "/profile":
        case "/profile/index.html":
            await import("./views/profileView.js");
            break;

        case "/NotFound":
        case "/NotFound/index.html":
            await import("./views/NotFoundView.js");
            break;
    }
}
