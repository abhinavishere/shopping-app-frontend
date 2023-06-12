import { Flex, FormControl, Highlight, Input, Text } from "@chakra-ui/react";
import ItemsList from "./ItemsList";
import { getProductsData } from "../../data/data";

const ItemsDrawer = () => {
  const products = getProductsData();

  return (
    <>
      {/* PageHeader */}
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        gap={"2.2rem"}
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Text maxW={"25rem"} fontSize={"2xl"} fontWeight="bold">
          <Highlight query={"Shoppingify"} styles={{ color: "primary" }}>
            Shoppingify
          </Highlight>{" "}
          allows you take your shopping list wherever you go
        </Text>

        <FormControl maxW={{ base: "full", md: "20rem" }} bgColor={"#fff"}>
          <Input
            border={"2px solid #aaa"}
            placeholder="Search Items"
            fontFamily={"inherit"}
          />
        </FormControl>
      </Flex>
      {/* Products List */}
      <Flex
        flexDirection={"column"}
        gap={"3rem"}
        overflowX={"hidden"}
        overflowY="scroll"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {products &&
          products.map((item: any, index) => (
            <ItemsList
              category={item.category}
              key={index}
              items={item.items}
            />
          ))}
      </Flex>
    </>
  );
};

export default ItemsDrawer;
