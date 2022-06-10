import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
  Button,
} from "@chakra-ui/react";
import MyButton from "./MyButton";
import MyText from "./MyText";

function DealersChoice({ options, idx }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      onClick={onOpen}
      style={{ cursor: "pointer" }}
      rounded="md"
      as={"a"}
      w="full"
      boxShadow={"lg"}
      background="whiteAlpha.300"
      p="5"
    >
      <Flex rounded="md" gap="5" align="center" w="full">
        {idx % 2 === 0 && options.imageLink && (
          <AspectRatio h="full" w="40" ratio={1}>
            <Image src={options.imageLink} fit="cover" h="full" />
          </AspectRatio>
        )}
        <Flex direction="column" gap="3" flexGrow={1}>
          {options.heading && <Heading>{options.heading}</Heading>}
          {options.text && <Text>{options.text}</Text>}
        </Flex>
        {idx % 2 === 1 && options.imageLink && (
          <AspectRatio h="full" w="32" ratio={1}>
            <Image src={options.imageLink} fit="cover" h="full" />
          </AspectRatio>
        )}
      </Flex>
      {options?.showModal !== "false" && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent background="brand.background">
            <ModalHeader>{options.heading}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                direction="column"
                gap="2"
                w="full"
                align={options.modalAlign}
              >
                <MyText text={options.modal} />
              </Flex>
            </ModalBody>

            <ModalFooter gap="2">
              <Button variant="hotPinkSecondary" onClick={onClose}>
                Back
              </Button>
              {options.link && <MyButton link={options.link} />}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default DealersChoice;
