import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService from "../services/gameService";

const useGames = (gameQuery: GameQuery) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return gameService.getAll(gameQuery);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return { games: data, error, isLoading };
};

export default useGames;
