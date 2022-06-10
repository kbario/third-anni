import {
  Flex,
  Heading,
  Text,
  Box,
  Skeleton,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  InformationCircleIcon,
  PuzzleIcon,
  TruckIcon,
} from "@heroicons/react/outline";
import useDate from "../hooks/useDate";
import capitalise from "../helpers/capitalise";
import DealersChoice from "./DealerChoice";
import MyButton from "./MyButton";
import MyText from "./MyText";

function SchedCard({ info }) {
  const now = useDate();
  const time = new Date(2022, 5, 9, info.timeShow[0], info.timeShow[1]);
  const showIcon = false;
  return (
    <Flex
      direction="column"
      gap="3"
      p="5"
      rounded="md"
      bg="brand.card"
      shadow="md"
    >
      <Flex justify="space-between">
        <Flex direction="column">
          <Flex gap="2" align="center">
            <Heading variant="schedCardLabel">
              {info.label.toUpperCase()}
            </Heading>
            {showIcon && info.icon && (
              <Box as={eval(`${capitalise(info.icon)}Icon`)} h="5" w="5" />
            )}
          </Flex>
          <Skeleton
            isLoaded={now >= time ? true : false}
            speed="4"
            startColor="brand.skelOne"
            endColor="brand.skelTwo"
          >
            <Heading variant="schedCardHeading">{info.heading}</Heading>
          </Skeleton>
        </Flex>
        {info.time && (
          <Flex
            rounded="full"
            bg="whiteAlpha.500"
            w="10"
            h="10"
            justify="center"
            align="center"
          >
            {info.time}
          </Flex>
        )}
      </Flex>
      <Skeleton
        isLoaded={now >= time ? true : false}
        speed="4"
        startColor="brand.skelTwo"
        endColor="brand.skelOne"
      >
        <Flex gap="5" direction="column" align="start">
          {info.text && (
            <Flex direction="column" gap="2">
              <MyText text={info.text} />
            </Flex>
          )}
          {info.options &&
            now >= time &&
            info.options.map((item, idx) => {
              return (
                <DealersChoice
                  key={idx}
                  options={item}
                  idx={idx}
                  now={now}
                  time={time}
                />
              );
            })}
          {info.link && <MyButton link={info.link} />}
        </Flex>
      </Skeleton>
    </Flex>
  );
}

export default SchedCard;
