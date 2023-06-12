import { Navigate, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import { Flex } from "@chakra-ui/react";
import ItemsDrawer from "./components/ItemsDrawer/ItemsDrawer";
import History from "./components/History/History";
import Dashboard from "./components/Dashboard/Dashboard";
import { useListContext } from "./context/ListContext";
import Layout from "./components/Layout/Layout";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
  const ctx = useListContext();
  return (
    <>
      <Flex>
        <SideNav />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="products" element={<ItemsDrawer />} />
            <Route path="history" element={<History />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        {ctx?.isOpen && <SideDrawer />}
      </Flex>
    </>
  );
}

export default App;
