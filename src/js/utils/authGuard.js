import { ACCESS_TOKEN_KEY } from './constants.js';

export function authGuard(callback) {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!token) {
        window.location.href = ROUTES.LOGIN;
    } else if (callback) {
        callback();
    }
}
