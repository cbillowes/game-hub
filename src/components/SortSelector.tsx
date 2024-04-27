import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronCompactDown } from "react-icons/bs";

export interface SortOption {
  value: string;
  label: string;
}

interface Props {
  selectedSortOrder: string | null;
  onSelectedSortOrder: (option: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder =
    sortOrders.find((o) => o.value === selectedSortOrder)?.label || "Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronCompactDown />}>
        Order by: {sortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onSelectedSortOrder(option.value)}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
