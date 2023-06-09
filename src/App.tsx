import { Navigate, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import { Flex } from "@chakra-ui/react";
import ItemsDrawer from "./components/ItemsDrawer/ItemsDrawer";
import History from "./components/History/History";
import Dashboard from "./components/Dashboard/Dashboard";
import Aside from "./components/Aside/Aside";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const ctx = useContext(CartContext);
  return (
    <>
      <Flex>
        <SideNav />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ItemsDrawer />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {ctx.isOpen && <Aside />}
      </Flex>
    </>
  );
}

export default App;
