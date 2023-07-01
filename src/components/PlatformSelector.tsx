import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlarform from "../hooks/usePlarform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data: platforms } = usePlatforms();

  const platform = usePlarform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform?.id}
          >
            {platform?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
