import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import initialData from '../data/genres.json';

const useGenres = () => {
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    initialData,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return { genres, isLoading, error };
};

export type { Genre };

export default useGenres;
