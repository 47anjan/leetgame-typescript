import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import apiClient from "../services/api-client.ts";
import ms from "ms";
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
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
