import { HStack, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack>
      <Image
        boxSize="60px"
        src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
      />
      <Text>Navbar</Text>
    </HStack>
  );
};
export default Navbar;
