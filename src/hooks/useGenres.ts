import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";

const useGenres = () => {
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
  });
  return { genres, isLoading, error };
};

export type { Genre };

export default useGenres;
