import axios from "axios";

export default {
  // Saves a book to the database
  saveCook: function(bookData) {
    return axios.post("/api/homeCook", bookData);
  }
};