import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Flex
      direction="column"
      justify="center"
      gap="12"
      p="10"
      align="center"
      h="100vh"
      w="100vw"
      backgroundColor="brand.background"
    >
      <Heading textAlign="center">Felice anniversario amore mio</Heading>
      <Text textAlign="center">
        To celebrate our three years, I have prepared a special day of
        activities and I hope you enjoy it x
      </Text>
      <Link to="/sched">
        <Button>Let's go!</Button>
      </Link>
    </Flex>
  );
}

export default Home;
