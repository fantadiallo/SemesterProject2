import { ACCESS_TOKEN_KEY, ROUTES } from "./storage/Constans";
import * as storage from "./storage/localStorage";

export function authGuard(callback) {
  const token = storage.load(ACCESS_TOKEN_KEY);

  if (!token) {
    window.location.href = ROUTES.LOGIN;
  } else if (typeof callback === "function") {
    callback();
  }
}
