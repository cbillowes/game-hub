import ApiClient from "./apiClient";

export interface Response<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}

class RawgService<T> {
  endpoint: string;
  client: ApiClient<Response<T>>;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.client = new ApiClient<Response<T>>(endpoint);
  }

  getAll = async (params?: any) => {
    const response = await this.client.getAll(params);
    return response.results;
  };
}

export default RawgService;
