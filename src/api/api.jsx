import axios from "axios";

export default axios.create({
  baseURL: "https://urlshortener-backend-mdfy.onrender.com",
});

// baseURL: "http://localhost:3001/",