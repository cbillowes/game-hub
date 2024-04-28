import { Genre } from "./genreService";
import { Platform } from "./platformService";
import RawgService from "./rawgService";

const service = new RawgService<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number; // whole number
  rating: number;     // floating point number
}

export interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string | null;
  searchText?: string | null;
}

const gameService = {
  getAll: async (query: GameQuery) => {
    const results = await service.getAll({
      genres: query.genre?.id,
      parent_platforms: query.platform?.id,
      ordering: query.sortOrder,
      search: query.searchText,
    });
    return results;
  },
};

export default gameService;