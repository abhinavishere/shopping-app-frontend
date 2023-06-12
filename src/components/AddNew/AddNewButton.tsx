import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const AddNewButton = () => {
  return (
    <Flex
      alignItems={"center"}
      fontWeight={"semibold"}
      backgroundColor={"cardBg"}
      paddingInline={"1rem"}
      columnGap={"1.9rem"}
      borderRadius={"1.5rem"}
    >
      <Box>
        <Image
          transform={"translateY(-1rem) scale(1.25)"}
          src="/bottle.svg"
          alt="Bottle"
        />
      </Box>
      <Flex direction={"column"} paddingBlock={"0.8rem"} rowGap={"1rem"}>
        <Text color={"white"}>Didn't find what you need?</Text>
        <Button backgroundColor={"white"}>Add New</Button>
      </Flex>
    </Flex>
  );
};

export default AddNewButton;
