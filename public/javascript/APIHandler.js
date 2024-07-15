class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  } 

  // Get all characters
  getAllCharacters() {
    return axios.get(`${this.baseUrl}/characters`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error getting all characters:', error);
        throw error; // Re-throw the error so it can be caught in the calling function
      });
  }

  // Get a single character by ID
  getCharacterById(id) {
    return axios.get(`${this.baseUrl}/characters/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error getting character with ID ${id}:`, error);
        throw error; // Re-throw the error so it can be caught in the calling function
      });
  }

  // Create a new character
  createCharacter(characterData) {
    return axios.post(`${this.baseUrl}/characters`, characterData)
      .then(response => response.data)
      .catch(error => {
        console.error('Error creating character:', error);
        throw error; // Re-throw the error so it can be caught in the calling function
      });
  }

  // Delete a character by ID
  deleteCharacterById(id) {
    return axios.delete(`${this.baseUrl}/characters/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error deleting character with ID ${id}:`, error);
        throw error; // Re-throw the error so it can be caught in the calling function
      });
  }

  // Edit a character by ID
  editCharacterById(id, characterData) {
    return axios.put(`${this.baseUrl}/characters/${id}`, characterData)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error updating character with ID ${id}:`, error);
        throw error; // Re-throw the error so it can be caught in the calling function
      });
  }
}
