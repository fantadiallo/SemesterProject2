export default async function router(pathname = window.location.pathname){
    console.log("routhing to:", pathname);
    switch(pathname)(
        case "/":
            await import("./views/home.js");
            break;
    )
}