import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";

const Demo = () => {
  return <h1>Demo</h1>;
};

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        {/* <Route path="/" element={<SideNav />} /> */}
        <Route path="/cart" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* Sidenav
        //  Logo
        //  Tabs
        //  Cart Button (Toggle)
      */
}
{
  /* Main
          // Header at top (Title + Search form to filter products)
          // Products List at bottom
      */
}
{
  /* Aside
        //  User Profile 
        //  Product details
        //  New Item Form
        // Shopping List
      */
}
