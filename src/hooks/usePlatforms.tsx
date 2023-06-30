import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = async () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms")
      .then((res) => res.data.results);

  return useQuery<Platform[], Error>({
    queryKey: ["platfoms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatforms;
