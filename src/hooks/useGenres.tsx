import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import apiClient from "../services/api-client.ts";
import ms from "ms";
import Genre from "../entities/Genre.tsx";
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
