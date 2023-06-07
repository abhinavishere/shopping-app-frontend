import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/cart">cart</Route>
      </Routes>
      {/* Sidenav
        //  Logo
        //  Tabs
        //  Cart Button (Toggle)
      */}
      {/* Main
          // Header at top (Title + Search form to filter products)
          // Products List at bottom
      */}
      {/* Aside
        //  User Profile 
        //  Product details
        //  New Item Form
        // Shopping List
      */}
    </>
  );
}

export default App;
