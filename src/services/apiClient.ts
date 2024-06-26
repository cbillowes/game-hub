import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_RAWG_IO_API_ENDPOINT,
  params: {
    key: import.meta.env.VITE_RAWG_IO_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (params: any) => {
    const response = await apiClient.get<T>(this.endpoint, {
      params,
    });
    return response.data;
  };
}

export default ApiClient;
