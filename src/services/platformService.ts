import RawgService from "./rawgService";

const service = new RawgService<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformService = {
  getAll: async () => {
    const results = await service.getAll();
    return results;
  },
};

export default platformService;