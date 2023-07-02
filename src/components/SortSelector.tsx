import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sort);
  const setSortOrder = useGameQueryStore((s) => s.setSort);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-relesed", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  const currentOrder = sortOrders.find(
    (sort) => sort.value === sortOrder || ""
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem onClick={() => setSortOrder(sort.value)} key={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
