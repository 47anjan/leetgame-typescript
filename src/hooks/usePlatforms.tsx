import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const client = apiClient<Platform>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platfoms"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });
};

export default usePlatforms;
