import { Button, Text } from "@chakra-ui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface ItemType {
  item: any;
}

const Item = ({ item }: ItemType) => {
  return (
    <Button
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={{ base: "8.75rem", md: "11.25rem" }}
      p={"1rem"}
      rounded={"md"}
      bgColor={"white"}
      fontWeight={"medium"}
      boxShadow={"0px 2px 12px rgba(0, 0, 0, 0.05)"}
    >
      <Text casing={"capitalize"}>{item.name}</Text>
      <PlusIcon width={"0.95rem"} />
    </Button>
  );
};

export default Item;
