import { Button, Text } from "@chakra-ui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

const Item = () => {
  return (
    <Button
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"11.3rem"}
      p={"1rem"}
      rounded={"md"}
      bgColor={"white"}
      fontWeight={"medium"}
      boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.05)"}
    >
      <Text>Item Text</Text>
      <PlusIcon width={"0.95rem"} />
    </Button>
  );
};

export default Item;
