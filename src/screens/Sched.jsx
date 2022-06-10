import { Flex, Heading, Text } from "@chakra-ui/react";

import SchedCard from "../components/SchedCard";

import breakfast from "../data/breakfast.json";
import lunch from "../data/lunch.json";
import dinner from "../data/dinner.json";

function Sched() {
  return (
    <Flex
      direction="column"
      gap="5"
      p="5"
      bg="brand.background"
      w="100vw"
      h="100vh"
      overflow="auto"
    >
      <Heading size="xl">Today's schedule</Heading>
      <Heading size="lg">Morning</Heading>
      {breakfast.map((item, idx) => {
        return <SchedCard key={idx} info={item} />;
      })}
      <Heading size="lg">Afternoon</Heading>
      {lunch.map((item, idx) => {
        return <SchedCard key={idx} info={item} />;
      })}
      <Heading size="lg">Evening</Heading>
      {dinner.map((item, idx) => {
        return <SchedCard key={idx} info={item} />;
      })}
    </Flex>
  );
}

export default Sched;
