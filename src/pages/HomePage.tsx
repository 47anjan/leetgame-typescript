import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem
            height={"fit-content"}
            position={"sticky"}
            top={0}
            area={"aside"}
            paddingX={5}
          >
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box marginLeft={2}>
            <GameHeading />
            <HStack marginBottom={5} spacing={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>

          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};
export default HomePage;
