import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  return { genres: data, isLoading, error };
};

export default useGenres;
