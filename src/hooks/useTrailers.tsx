import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const api = apiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: api.getAll,
  });
};
export default useTrailers;
