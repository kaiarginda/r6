import "./App.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Menus from "./Menus/Menus";
import Listings from "./Listings/Listings";
import Products from "./Products/Products";
import Sale from "./Sale/Sale";
import Daily from "./Daily/Daily";
import Testimonial from "./Testimonial/Testimonial";
import Top from "./Top/Top";
import News from "./News/News";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";
import Recipe from "./Recipe/Recipe";
import { Routes } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import ItemDetails from "./ItemDetails/ItemDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/eater"
          element={[
            <Navbar />,
            <Hero />,
            <Menus />,
            <Listings />,
            <Products />,
            <Sale />,
            <Daily />,
            <Testimonial />,
            <Top />,
            <News />,
            <Footer />,
            <Copyright />,
          ]}
        ></Route>
        <Route path="/recipe" element={[<Recipe />]}></Route>

        {/* <Route path={`/recipe/:id`} element={[<ItemDetails />]}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
