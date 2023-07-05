import { Box, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Box boxSize={{ base: "50px", md: "60px" }}>
        <Link to={"/"}>
          <Image src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp" />
        </Link>
      </Box>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
