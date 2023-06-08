import {
  FormControl,
  Grid,
  GridItem,
  Highlight,
  Input,
  Text,
} from "@chakra-ui/react";

const flexRules = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ItemsDrawer = () => {
  return (
    <Grid
      as="section"
      flexGrow="1"
      templateColumns="repeat(5, 1fr)"
      templateRows={"repeat(5, 1fr)"}
      p={"2rem"}
      bgColor={"secondary"}
    >
      <GridItem
        colSpan={3}
        rowSpan={1}
        {...flexRules}
        justifyContent={"flex-start"}
      >
        <Text
          maxW={"25rem"}
          fontSize={"2xl"}
          fontWeight="bold"
          justifySelf={"flex-start"}
        >
          <Highlight query={"Shoppingify"} styles={{ color: "primary" }}>
            Shoppingify
          </Highlight>{" "}
          allows you take your shopping list wherever you go
        </Text>
      </GridItem>
      <GridItem colSpan={2} rowSpan={1} {...flexRules}>
        {/* Default Form Input */}
        <FormControl display={"flex"} alignItems={"center"}>
          <Input placeholder="Search Items" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={5} rowSpan={4}></GridItem>
    </Grid>
  );
};

export default ItemsDrawer;
