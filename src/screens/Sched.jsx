import { Flex, Heading, Text } from "@chakra-ui/react";

import SchedCard from "../components/SchedCard";

import breakfast from "../data/breakfast.json";

function Sched() {
  return (
    <Flex
      direction="column"
      gap="5"
      p="5"
      bg="brand.background"
      w="100vw"
      h="100vh"
    >
      <Heading size="xl">Today's schedule</Heading>
      <Text>
        The day is organised around meal times - breakfast, lunch, and dinner -
        with activities for each meal
      </Text>
      <Heading size="lg">Breakfast</Heading>
      {breakfast.map((item) => {
        return <SchedCard info={item} />;
      })}
    </Flex>
  );
}

export default Sched;
