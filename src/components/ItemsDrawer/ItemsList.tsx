import Item from "./Item";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";

interface ItemsListProps {
  category: string;
  items: any;
}

const ItemsList = ({ category, items }: ItemsListProps) => {
  return (
    <Flex flexDirection={"column"} gap={"1.2rem"}>
      <Text fontSize={"1.2rem"} casing={"capitalize"} fontWeight={"semibold"}>
        {category}
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(auto-fit, minmax(8.5rem, 1fr))",
          md: "repeat(auto-fit, minmax(11.25rem, 1fr))",
        }}
        gap={{ base: "0.5rem", md: "1.25rem" }}
      >
        {items &&
          items?.map((item: any, index: number) => (
            <GridItem key={index}>
              <Item item={item} />
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export default ItemsList;
