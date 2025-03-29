import '../scss/main.scss';
import router from './js/router/index.js';

console.log('Pet Adoption App is running...');

(async () => {
  await router(window.location.pathname);
})();
