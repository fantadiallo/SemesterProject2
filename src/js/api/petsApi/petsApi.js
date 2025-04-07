import { API_BASE } from "../../utils/storage/Constans";
import { headers } from "../../utils/storage/Headers";



export default class PetsAPI {
  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiEndpoint = `${apiBase}/pets`;
  }

  /**
   * Reusable method for making API requests.
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

  /** ✅ Get all pets */
  async getAllPets() {
    const res = await this.fetchData(this.apiEndpoint);
    return res.data;
  }

  /** ✅ Get one pet by ID */
  async getPetById(id) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`);
    return res.data;
  }

  /** ✅ Search pets (client-side filter recommended) */
  async searchPets(query) {
    const allPets = await this.getAllPets();
    return allPets.filter(pet =>
      [pet.name, pet.breed, pet.species]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  /** ✅ Create a new pet */
  async createPet(data) {
    const res = await this.fetchData(this.apiEndpoint, "POST", data);
    return res.data;
  }

  /** ✅ Update a pet */
  async updatePet(id, data) {
    const res = await this.fetchData(`${this.apiEndpoint}/${id}`, "PUT", data);
    return res.data;
  }

  /** ✅ Delete a pet */
  async deletePet(id) {
    return await this.fetchData(`${this.apiEndpoint}/${id}`, "DELETE");
  }
}
