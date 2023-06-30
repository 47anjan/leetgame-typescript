import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "./useData.tsx";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const useGenres = () => {
  const fetchGenres = async () =>
    apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data.results);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
