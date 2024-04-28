import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import initialData from '../data/platforms.json';

const usePlatforms = () => {
  const {
    data: platforms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    initialData,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
  return { platforms, isLoading, error };
};

export type { Platform };

export default usePlatforms;
