import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import apiClient from "../services/api-client.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  const client = apiClient<Genre>("/genres");
  return useQuery({
    queryKey: ["genres"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, next: null, results: genres },
  });
};

export default useGenres;
