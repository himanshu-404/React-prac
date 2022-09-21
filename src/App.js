import React from "react";
import Model from "./components/Model";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllToll from "./pages/AllToll";
import AddTollModel from "./components/AddTollModel";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="allTolls" element={<AllToll />} />
    </Routes>
  );
};

export default App;
