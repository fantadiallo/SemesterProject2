import { API_BASE } from "../../utils/storage/Constans";
import { headers } from "../../utils/storage/Headers";
import { load, save } from "../../utils/storage/localStorage";

/**
 * AuthAPI handles user authentication with login and registration.
 */
export default class AuthAPI {
  apiBase = "";
  apiLogin = "";
  apiRegister = "";

  /**
   * Initializes the AuthAPI with a base URL.
   * @param {string} apiBase - The base URL for the API.
   */
  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiLogin = `${apiBase}/auth/login`;
    this.apiRegister = `${apiBase}/auth/register`;
  }

  auth = {
    /**
     * Registers a new user.
     * @async
     * @param {Object} params - The registration parameters.
     * @param {string} params.name - The user's name.
     * @param {string} params.email - The user's email.
     * @param {string} params.password - The user's password.
     * @returns {Promise<Object>} The registered user data.
     * @throws Will throw an error if the registration fails.
     */
    register: async ({ name, email, password }) => {
      const body = JSON.stringify({
        name,
        email,
        password,
      });
      try {
        const response = await fetch(this.apiRegister, {
          method: "POST",
          headers: headers(true),
          body,
        });

        if (!response.ok) {
          throw new Error("Could not register the account");
        }

        const data = await response.json();
        console.log("Registration successful:", data);
        return data;
      } catch (error) {
        console.error("Could not register:", error);
        throw error;
      }
    },

    /**
     * Logs in a user.
     * @async
     * @param {Object} params - The login parameters.
     * @param {string} params.email - The user's email.
     * @param {string} params.password - The user's password.
     * @returns {Promise<Object>} The logged-in user data including accessToken.
     * @throws Will throw an error if the login fails or the response is invalid.
     */
    login: async ({ email, password }) => {
      const body = JSON.stringify({
        email,
        password,
      });
      try {
        const response = await fetch(this.apiLogin, {
          method: "POST",
          headers: headers(true),
          body,
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          console.error("Server response error:", errorMessage);
          throw new Error(`Could not login the account: ${errorMessage}`);
        }

        const userData = await response.json();
        console.log("Login response data:", userData);

        const userInfo = userData.data || userData;
        if (!userInfo || !userInfo.accessToken) {
          throw new Error("Invalid login response structure. AccessToken not found.");
        }

        save("accessToken", userInfo.accessToken);
        save("user", userInfo);

        return userInfo;
      } catch (error) {
        console.error("Login failed: ", error);
        throw error;
      }
    },
  };
}
