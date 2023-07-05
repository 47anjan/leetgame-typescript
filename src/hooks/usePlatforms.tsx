import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const usePlatforms = () => {
  const client = apiClient<Platform>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platfoms"],
    queryFn: client.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
};

export default usePlatforms;
