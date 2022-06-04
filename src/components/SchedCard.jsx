import { Flex, Heading, Text } from "@chakra-ui/react";

function SchedCard({ info }) {
  return (
    <Flex direction="column" gap="5">
      <Heading size="md">{info.heading}</Heading>
      <Flex gap="5">
        <Text>{info.time}</Text>
        <Text>{info.text}</Text>
      </Flex>
    </Flex>
  );
}

export default SchedCard;
