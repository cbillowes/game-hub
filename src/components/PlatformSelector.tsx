import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem>Any</MenuItem>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
