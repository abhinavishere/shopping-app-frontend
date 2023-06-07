import { Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
const SideNav = () => {
  return (
    <header>
      <div></div>
      <nav>
        <ul>
          <li>Items</li>
          <li>History</li>
          <li>Stats</li>
        </ul>
      </nav>
      <Link as={RouteLink} to={"/cart"}>
        Cart Button
      </Link>
    </header>
  );
};

export default SideNav;
