import { Button, Text } from "@chakra-ui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useListDispatchContext } from "../../context/ListContext";

type Item = {
  allergens: string;
  brand: string;
  calories: number;
  category: string;
  category_name: string;
  expiration_date: string;
  id: number;
  name: string;
  organic: boolean;
  price: number;
  quantity: number;
  unit: number;
};

type ItemType = {
  item: Item;
};

const Item = ({ item }: ItemType) => {
  const ctx = useListDispatchContext();
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
      onClick={() => {
        ctx?.setListItems((state) => [
          ...state,
          { id: item.id, name: item.name, quantity: item.quantity },
        ]);
      }}
    >
      <Text casing={"capitalize"}>{item.name}</Text>
      <PlusIcon width={"0.95rem"} />
    </Button>
  );
};

export default Item;
