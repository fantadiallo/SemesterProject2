export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function load(key) {
    try {
      const value = localStorage.getItem(key); 
      return JSON.parse(value);
    } catch (error) {
      console.error("Failed to load data from localStorage:", error);
      return null;
    }
  
  }
  export function remove(key){
    localStorage.removeItem(key)
  }
  