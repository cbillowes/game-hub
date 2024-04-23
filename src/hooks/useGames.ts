import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
  return { games: data, error, isLoading };
};

export default useGames;
