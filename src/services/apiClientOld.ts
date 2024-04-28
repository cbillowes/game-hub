import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_RAWG_IO_API_ENDPOINT,
  params: {
    key: import.meta.env.VITE_RAWG_IO_API_KEY,
  }
});