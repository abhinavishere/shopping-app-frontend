import { Flex } from "@chakra-ui/react";
import ShoppingList from "../ShoppingList/ShoppingList";

// type Item = {
//   id: number;
//   name: string;
//   quantity: number;
// };

const SideDrawer = () => {
  return (
    <Flex
      w="375px"
      h="100vh"
      flexShrink={0}
      flexGrow={0}
      justifyContent={"center"}
      alignItems="center"
    >
      <ShoppingList />
      {/* AddNewForm */}
      {/* ProductDetails */}
    </Flex>
  );
};

export default SideDrawer;
