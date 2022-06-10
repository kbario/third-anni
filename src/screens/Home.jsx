import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  localStorage.setItem("myBoo", "boo");
  return (
    <Flex
      direction="column"
      justify="center"
      gap="12"
      p="10"
      align="center"
      flexGrow={1}
      backgroundColor="brand.background"
    >
      <Heading textAlign="center">Felice anniversario amore mio</Heading>
      <Text textAlign="center">
        To celebrate our three years, I have prepared a special day of
        activities and I hope you enjoy it x
      </Text>
      <Link to="/third-anni/itin">
        <Button>Let's go!</Button>
      </Link>
    </Flex>
  );
}

export default Home;
