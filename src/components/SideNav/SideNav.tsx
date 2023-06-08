import { Button, Flex, Icon, IconButton, Image, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ItemsIcon from "../../utils/Icons/ItemsIcon";
import HistoryIcon from "../../utils/Icons/HistoryIcon";
import StatsIcon from "../../utils/Icons/StatsIcon";
import CartIcon from "../../utils/Icons/CartIcon";
import SideNavLink from "../SideNavLink/SideNavLink";

const SideNav = () => {
  return (
    <Flex
      as="header"
      w="5.5rem"
      h="100vh"
      flexDirection="column"
      flexShrink={0}
      alignItems="center"
      paddingBlock="1.75rem"
      justifyContent={"space-between"}
    >
      <Flex w="100%" justifyContent={"center"}>
        <Link as={NavLink} to={"/products"}>
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
        <SideNavLink path="/products" element={<ItemsIcon />} />
        <SideNavLink path="/history" element={<HistoryIcon />} />
        <SideNavLink path="/dashboard" element={<StatsIcon />} />
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
      />
    </Flex>
  );
};

export default SideNav;

// _before={{
//   content: "''",
//   position: "absolute",
//   width: "6px",
//   height: "45.98px",
//   left: "0px",
//   background: "#F9A109",
//   borderRadius: "0px 4px 4px 0px",
// }}
