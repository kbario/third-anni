import { Flex, Heading, Text } from "@chakra-ui/react";
import MyMenu from "../components/MyMenu";

function Itin() {
  return (
    <>
      <Flex
        direction="column"
        gap="5"
        p="5"
        bg="brand.background"
        flexGrow={1}
        overflow="auto"
      >
        <Heading>Today's itinerary</Heading>
        <Text>Today we will be doing a variety of activities.</Text>
        <Text>
          Most will be calm and relaxing; some may be a little more intense.
        </Text>
        <Text>
          For the first part of the day, wear some thing casual and comfortable
          keeping in mind the weather x
        </Text>
        <Text>
          For the second part of the day, we're getting fancy so bring something
          that you look super cute in.
        </Text>
        <Text>
          Remember the weather and know that we will have to get changed in a
          car and kinda quickly x
        </Text>
        <Text>
          All in all, you look beautiful no matter what. Don't worry but be
          prepared and lets go have fun x
        </Text>
        <Text>If all else fails use what I wear as a guide x</Text>
      </Flex>
      <MyMenu />
    </>
  );
}

export default Itin;
