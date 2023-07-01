import usePlatforms from "./usePlatforms";

const usePlarform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};
export default usePlarform;
