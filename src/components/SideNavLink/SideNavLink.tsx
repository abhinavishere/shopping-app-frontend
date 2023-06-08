import { Icon, Link, Tooltip } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

type SideNavLinkProps = {
  path: string;
  element: React.ReactNode;
};

const SideNavLink = ({ path, element }: SideNavLinkProps) => {
  return (
    <Link
      as={NavLink}
      p="0.5rem"
      rounded="full"
      _hover={{
        color: "whiteAlpha.900",
        bgColor: "primary",
      }}
      to={path}
    >
      <Tooltip label="Items" placement="right" hasArrow>
        <Icon w={"1.5rem"} h="1.5rem">
          {element}
        </Icon>
      </Tooltip>
    </Link>
  );
};

export default SideNavLink;
