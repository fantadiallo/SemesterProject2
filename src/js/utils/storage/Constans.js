// Base API
export const API_BASE = 'https://v2.api.noroff.dev';

// API Key (if required by Noroff backend)
export const API_KEY = 'eee2984b-02cd-4800-82cb-79cab62424af';

// LocalStorage keys
export const ACCESS_TOKEN_KEY = 'accessToken';
export const USER_KEY = 'user';

// Auth endpoints
export const API_AUTH = `${API_BASE}/auth`;
export const API_AUTH_LOGIN = `${API_AUTH}/login`;
export const API_AUTH_REGISTER = `${API_AUTH}/register`;

// Pets endpoints
export const API_PETS = `${API_BASE}/pets`;


// Profiles endpoints
export const API_PROFILES = `${API_BASE}/profiles`;

// URL params (used in views like pet detail or edit)
export const params = new URLSearchParams(window.location.search);
export const petId = params.get("id") || null;
export const userId = params.get("id") || null;

// Route paths
export const ROUTES = {
  LOGIN: '/auth/login.html',
  REGISTER: '/auth/register.html',
  HOME: '/',
  PET_DETAILS: '/pet/index.html',
  PET_CREATE: '/pet/create.html',
  PET_EDIT: '/pet/edit.html',
  NOT_FOUND: '/NotFound/index.html',
  PROFILE: '/profile/index.html',
};
