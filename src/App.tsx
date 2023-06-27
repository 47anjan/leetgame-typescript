import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem
            height={"fit-content"}
            position={"sticky"}
            top={0}
            area={"aside"}
            paddingX={5}
          >
            <h1>Sidebar</h1>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <h1>Main</h1>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
