import axios from "axios";

const url = "http://localhost:4500/user";

export const getUserData = () => {
  return axios.get(url);
};