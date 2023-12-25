import axios from "axios";

export const initAxiosSetup = () => {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
};
