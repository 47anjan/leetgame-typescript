import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => {
  const api = apiClient<Game>("/games");

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => api.get(slug),
  });
};
export default useGame;
