import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-sachin.herokuapp.com",
});

export default instance;
