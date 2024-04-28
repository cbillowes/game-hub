import RawgService from "./rawgService";

const service = new RawgService<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const genreService = {
  getAll: async () => {
    const results = await service.getAll();
    return results;
  },
};

export default genreService;