import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import apiClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const api = apiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: api.getAll,
  });
};
export default useScreenshots;
