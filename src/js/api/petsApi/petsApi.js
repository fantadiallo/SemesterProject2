import { API_BASE } from "../../utils/storage/Constans";
import { headers } from "../../utils/storage/Headers";

/**
 * Class for interacting with the Pets API.
 */
export default class PetsAPI {
  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiEndpoint = `${apiBase}/pets`;
  }

  /**
   * Makes an API request to the specified endpoint.
   * Shows a loader during the request and hides it afterward.
   * 
   * @param {string} endpoint - The API endpoint to request.
   * @param {string} [method="GET"] - HTTP method (GET, POST, PUT, DELETE).
   * @param {Object|null} [body=null] - Optional request body.
   * @returns {Promise<Object|null>} - The parsed JSON response or null.
   * @throws {Error} - If the request fails.
   */
  async fetchData(endpoint, method = "GET", body = null) {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: headers(),
        body: body ? JSON.stringify(body) : undefined,
      });

      if (response.ok) {
        return response.status === 204 ? null : await response.json();
      } else {
        throw new Error(`Failed to ${method}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Pets API error:", error);
      throw error;
    }
  }

  /**
   * Fetches a list of all pets.
   * 
   * @returns {Promise<Array>} - An array of pet objects.
   */
  async getAllPets() {
    const res = await this.fetchData(this.apiEndpoint);
    return res.data;
  }

  /**
   * Fetches a single pet by its ID.
   * 
   * @param {string} id - The ID of the pet.
   * @returns {Promise<Object>} - The pet object.
   */
  async getPetById(id) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`);
    return res.data;
  }

  /**
   * Searches pets by query string across name, breed, and species.
   * 
   * @param {string} query - The search term.
   * @returns {Promise<Array>} - An array of matching pet objects.
   */
  async searchPets(query) {
    const allPets = await this.getAllPets();
    return allPets.filter(pet =>
      [pet.name, pet.breed, pet.species]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  /**
   * Creates a new pet record.
   * 
   * @param {Object} data - The pet data to create.
   * @returns {Promise<Object>} - The created pet object.
   */
  async createPet(data) {
    const res = await this.fetchData(this.apiEndpoint, "POST", data);
    return res.data;
  }

  /**
   * Updates an existing pet by ID.
   * 
   * @param {string} id - The ID of the pet to update.
   * @param {Object} data - The updated pet data.
   * @returns {Promise<Object>} - The updated pet object.
   */
  async updatePet(id, data) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`, "PUT", data);
    return res.data;
  }

  /**
   * Deletes a pet by ID.
   * 
   * @param {string} id - The ID of the pet to delete.
   * @returns {Promise<null>} - Null if successful.
   */
  async deletePet(id) {
    return await this.fetchData(`${this.apiEndpoint}/${id}`, "DELETE");
  }
}
