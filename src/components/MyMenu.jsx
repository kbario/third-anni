import { Flex } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

function MyMenu() {
  const thing = [{ itin: "Itinerary" }, { sched: "Schedule" }];
  const styl = { textDecoration: "underline" };
  return (
    <Flex w="full" background="brand.hotPink">
      {thing.map((item, idx) => {
        const lin = Object.keys(item);
        return (
          <Flex
            key={idx}
            as={RouterLink}
            to={`/third-anni/${lin}`}
            textColor="brand.background"
            w="50%"
            fontSize="xl"
            fontWeight="bold"
            style={({ isActive }) => (isActive ? styl : undefined)}
            p="5"
            justify={"center"}
            borderRight={idx === 0 ? "2px" : "0px"}
            borderColor={idx === 0 ? "brand.background" : "none"}
          >
            {item[lin]}
          </Flex>
        );
      })}
    </Flex>
  );
}

export default MyMenu;
