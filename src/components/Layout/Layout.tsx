import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex
      as="section"
      paddingInline={{ base: "0.75rem", md: "2rem" }}
      paddingBlock={{ base: "2rem", md: "2rem" }}
      bgColor={"secondary"}
      flexDirection={"column"}
      h={"100vh"}
      w="full"
      marginLeft={{ base: "4rem", md: "5.5rem" }}
      gap={"2rem"}
    >
      <Outlet />
    </Flex>
  );
};

export default Layout;
