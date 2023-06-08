import ItemsList from "./ItemsList";
import { Flex, Text } from "@chakra-ui/react";

type ItemsWrapperProps = {
  categoryName: string;
};

const ItemsWrapper = ({ categoryName }: ItemsWrapperProps) => {
  return (
    <Flex flexDirection={"column"}>
      <Text>{categoryName}</Text>
      <ItemsList />
    </Flex>
  );
};

export default ItemsWrapper;
