import { Heading } from "@chakra-ui/react";
import usePlarform from "../hooks/usePlarform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(genreId);
  const platform = usePlarform(platformId);

  const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;

  return (
    <Heading marginBottom={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
