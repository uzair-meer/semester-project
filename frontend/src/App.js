import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen.js";
import ProductsScreen from "./Screens/ProductsScreen";
import CartScreen from "./Screens/CartScreen";
import Navbar from "./components/Navbar";
import "./App.css";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar toggleHandler={() => setSideToggle(true)} />
        <Backdrop
          show={sideToggle}
          toggleHandler={() => setSideToggle(false)}
        />
        <SideDrawer show={sideToggle} />

        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />

            <Route exact path="/product/:id" element={<ProductsScreen />} />

            <Route exact path="/cart" element={<CartScreen />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
