import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = async () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
        },
      })
      .then((res) => res.data.results);

  return useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
  });
};
export default useGames;
