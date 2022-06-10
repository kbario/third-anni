import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Flex,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import { HeartIcon } from "@heroicons/react/outline";
import { Link as RouterLink } from "react-router-dom";

function MyMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        pos="absolute"
        bottom="5"
        right="5"
        p="5"
        w="20"
        h="20"
        stroke="brand.background"
        rounded="full"
        bg="brand.hotPink"
        aria-label="Options"
        icon={<HeartIcon color="brand.background" />}
      />
      <MenuList>
        <MenuItem
          fontSize="2xl"
          icon={<HeartIcon />}
          as={RouterLink}
          to="/sched"
        >
          Schedule
        </MenuItem>
        <MenuItem
          fontSize="2xl"
          icon={<HeartIcon />}
          as={RouterLink}
          to="/itin"
        >
          Itinerary
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MyMenu;
