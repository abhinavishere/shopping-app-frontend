import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ItemsIcon from "../../utils/Icons/ItemsIcon";
import HistoryIcon from "../../utils/Icons/HistoryIcon";
import StatsIcon from "../../utils/Icons/StatsIcon";
import CartIcon from "../../utils/Icons/CartIcon";
import Link from "../Link/Link";
import { useListDispatchContext } from "../../context/ListContext";

const SideNav = () => {
  const { setIsOpen } = useListDispatchContext();
  return (
    <Flex
      as="header"
      w={{ base: "4rem", md: "5.5rem" }}
      h="100vh"
      flexDirection="column"
      flexShrink={0}
      alignItems="center"
      paddingBlock="1.75rem"
      justifyContent={"space-between"}
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      bgColor={"white"}
    >
      <Flex w="100%" justifyContent={"center"}>
        <Link as={NavLink} path={"/"}>
          <Image src="/shoppingifyLogo.svg" />
        </Link>
      </Flex>

      <Flex
        as="nav"
        w="100%"
        flexDirection="column"
        alignItems="center"
        gap={"4.5rem"}
      >
        <Link
          as={NavLink}
          path="/products"
          hasTooltip={true}
          tooltipLabel="Items"
          hasIcon={true}
          iconEl={<ItemsIcon />}
        />
        <Link
          as={NavLink}
          path="/history"
          hasTooltip={true}
          tooltipLabel="History"
          hasIcon={true}
          iconEl={<HistoryIcon />}
        />
        <Link
          as={NavLink}
          path="/dashboard"
          hasTooltip={true}
          tooltipLabel="Stats"
          hasIcon={true}
          iconEl={<StatsIcon />}
        />
      </Flex>

      <IconButton
        w="2.5rem"
        h="2.5rem"
        rounded={"full"}
        color="whiteAlpha.900"
        bgColor="primary"
        _hover={{ color: "black", bgColor: "#aaa" }}
        icon={
          <Icon w={"1.5rem"} h="1.5rem">
            <CartIcon />
          </Icon>
        }
        aria-label={"Cart Icon"}
        onClick={() => setIsOpen((state: any) => !state)}
      />
    </Flex>
  );
};

export default SideNav;
