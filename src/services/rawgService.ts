import ApiClient from "./apiClient";

export interface Result<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}

class RawgService<T> {
  endpoint: string;
  client: ApiClient<Result<T>>;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.client = new ApiClient<Result<T>>(endpoint);
  }

  getAll = async () => {
    const response = await this.client.getAll();
    return response.results;
  };
}

export default RawgService;
