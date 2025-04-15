import './scss/main.scss';
import router from "./js/router/index.js";

await router(window.location.pathname);
console.log("JS is working ✅");
