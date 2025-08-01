import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: base_url,
});

export default api;