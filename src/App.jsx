import { useState } from "react";
import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
