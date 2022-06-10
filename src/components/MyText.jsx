import { Text, Flex } from "@chakra-ui/react";

function MyText({ text }) {
  if (typeof text === "string") {
    return <Text>{text}</Text>;
  }
  if (Array.isArray(text)) {
    return text.map((item, idx) => <Text key={idx}>{item}</Text>);
  }
}

export default MyText;
