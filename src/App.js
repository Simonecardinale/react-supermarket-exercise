import React, {useState} from "react";
import "./App.css"
import MainPage from "./MainPage";
import {Route, Routes} from "react-router-dom";
import Shopping from "./Shopping";
import Account from "./Account";
import Carrello from "./Carrello";


function App() {
    const [cartStatus, setCartStatus] = useState([]);

    const shareDataToCartPage = (cartData) => setCartStatus(cartData);


  return(
    <>
      {/*<MainPage />*/}
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shopping" element={<Shopping shareDataToCart={shareDataToCartPage} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/carrello" element={<Carrello cartStatus={cartStatus} />} />
      </Routes>
      </>
    )
}

export default App;
