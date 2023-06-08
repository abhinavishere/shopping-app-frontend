import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import { Flex } from "@chakra-ui/react";
import ItemsDrawer from "./components/ItemsDrawer/ItemsDrawer";
import History from "./components/History/History";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Flex>
        <SideNav />
        <Routes>
          <Route path="/products" element={<ItemsDrawer />} />
          <Route path="/history" element={<History />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Flex>
    </>
  );
}

export default App;
