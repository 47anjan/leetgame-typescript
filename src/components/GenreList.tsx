import { Button, HStack, List, ListItem, Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, error } = useGenres();

  if (error) return null;
  return (
    <List>
      {genres.map((genre) => (
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
              fontWeight={"normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre?.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
