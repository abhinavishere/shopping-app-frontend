import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import AddNewButton from "../AddNew/AddNewButton";
import { useListContext } from "../../context/ListContext";
import { useState } from "react";

const ShoppingList = () => {
  const ctx = useListContext();
  const [listName, setListName] = useState("");

  const EmptyList = (
    <Flex direction={"column"} alignItems={"center"} gap={"4rem"}>
      <Text fontSize={"1.25rem"} fontWeight={"bold"}>
        No Items
      </Text>
      <Image src="/emptyCart.svg" alt="Empty Cart" />
    </Flex>
  );

  const ListItems = (
    <List flexGrow={1}>
      {ctx?.listItems?.map((items) => (
        <ListItem key={items.id}>{items.name}</ListItem>
      ))}
    </List>
  );
  return (
    <Flex
      w="full"
      h="full"
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Flex
        flexGrow={1}
        direction={"column"}
        justifyContent={"space-between"}
        backgroundColor={"primaryLight"}
        p="2.75rem 2.75rem 0"
      >
        <AddNewButton />
        {ctx?.listItems?.length !== 0 ? ListItems : EmptyList}
      </Flex>

      <FormControl
        display={"flex"}
        alignItems={"center"}
        gap={"1rem"}
        padding={"1rem 2.75rem"}
        fontFamily={"inherit"}
      >
        <Input
          type="text"
          placeholder="Enter a name"
          onChange={(e) => setListName(e.target.value)}
          _focusVisible={{
            outline: "2px solid",
            outlineColor: "primary",
            outlineOffset: 0,
          }}
        />
        <Button
          backgroundColor="primary"
          color="white"
          type="submit"
          isDisabled={!listName.length}
          _disabled={{
            opacity: "0.4",
            backgroundColor: "gray",
            cursor: "not-allowed",
          }}
          _hover={{
            _disabled: {
              opacity: "0.4",
              backgroundColor: "gray",
            },
          }}
        >
          Save
        </Button>
      </FormControl>
    </Flex>
  );
};

export default ShoppingList;
