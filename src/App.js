import React from "react";
import "./App.css"
import MainPage from "./MainPage";
import {Route, Routes} from "react-router-dom";
import Shopping from "./Shopping";
import Account from "./Account";
import Carrello from "./Carrello";


function App() {
  return(
    <>
      {/*<MainPage />*/}
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/account" element={<Account />} />
          <Route path="/carrello" element={<Carrello />} />
      </Routes>
      </>
    )
}

export default App;
