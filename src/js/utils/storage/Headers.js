
import { ACCESS_TOKEN_KEY, API_KEY } from './Constans.js';
import * as storage from './localStorage.js';

export function headers() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const token = storage.load(ACCESS_TOKEN_KEY);

  if (API_KEY) {
    headers.append('X-Noroff-API-Key', API_KEY);
  }

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  return headers;
}
