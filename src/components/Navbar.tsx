import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image
        boxSize="60px"
        src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
      />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
