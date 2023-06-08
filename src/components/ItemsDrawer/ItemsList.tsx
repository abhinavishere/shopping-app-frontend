import { Grid, GridItem } from "@chakra-ui/react";
import Item from "./Item";

const ItemsList = () => {
  return (
    <Grid
      templateColumns={"repeat(auto-fill, minmax(11.25rem, 1fr))"}
      templateRows={"repeat(auto-fill, minmax(32px, 1fr))"}
      justifyItems={"space-between"}
      alignItems={"center"}
      columnGap={"1.2rem"}
      rowGap={"3rem"}
    >
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
    </Grid>
  );
};

export default ItemsList;
