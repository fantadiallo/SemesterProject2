import { API_BASE } from "../../utils/storage/Constans";
import { headers } from "../../utils/storage/Headers";


export default class profileApi {
    apiBase = "";
    apiProfile = "";
  
    constructor(apiBase = API_BASE) {
      this.apiBase = apiBase;
      this.apiProfile = `${apiBase}/pets/profiles`;
    }

    fetchData = async (endpoint, method = "GET", body = null) => {
        try {
          showLoader();
          const res = await fetch(endpoint, {
            method,
            headers: headers(),
            body: body ? JSON.stringify(body) : undefined,
          });
          if (res.ok) {
            const data = await res.json();
            return data;
          } else {
            alert(
              `Failed to ${method === "GET" ? "fetch" : "update"}, please try again`
            );
          }
        } catch (error) {
          console.error(error);
          throw error;
        } finally {
          hideLoader();
        }
      };
      profile = {
        /**
         * Fetches the current user's profile data along with following and followers information.
         * @returns {Promise<Object>} - The user's profile data.
         */
        read: async (username) => {
          const endpoint = `${this.apiProfile}/${username}`;
          const data = await this.fetchData(endpoint);
          return data;
        },
    
        /**
         * Updates a user's profile data.
         * @param {Object} formData - The data to update the user's profile with (avatar, name, bio).
         * @returns {Promise<Object>} - The updated profile data.
         */
        update: async (username, formData) => {
          const endpoint = `${this.apiProfile}/${username}`;
          const data = await this.fetchData(endpoint, "PUT", formData);
          return data;
        },
        search: async (query) => {
            const endpoint = `${this.apiProfile}/search?q=${query}`;
            const data = await this.fetchData(endpoint);
            return data;
          },
          readListings: async (username) => {
            const endpoint = `${this.apiProfile}/${username}/listings`;
            const data = await this.fetchData(endpoint, "GET");
            return data;
          },
        };
    }
    
    