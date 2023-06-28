import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        boxSize={{ base: "50px", md: "60px" }}
        src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
      />

      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default Navbar;
