import genres from "../data/genres.ts";

const useGenres = () => {
  return { genres, loading: false, error: null };
};

export default useGenres;
