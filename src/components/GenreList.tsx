import {
  Button,
  HStack,
  List,
  ListItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const genreSkeletons = Array(12).fill("🔥");

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGanreId);

  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginTop={1} marginBottom={3}>
        Genres
      </Heading>

      <List>
        {isLoading &&
          genreSkeletons.map((_, index) => <GenreListSkeleton key={index} />)}
        {data?.results?.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre?.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre?.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
