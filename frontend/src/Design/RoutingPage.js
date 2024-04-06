import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nekath from "./Pages/Nekath";
import Food from "./Pages/Food";
import Raban from "./Pages/Raban";
import Wish from "./Pages/Wish";
import Games from "./Pages/Games";
import Pancha from "./Pages/Pancha";
import Mutti from "./Pages/Mutti";

export default function RoutingPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nekath" element={<Nekath />} />
        <Route path="/food" element={<Food />} />
        <Route path="/raban" element={<Raban />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/games" element={<Games />} />
        <Route path="/pancha" element={<Pancha />} />
        <Route path="/mutti" element={<Mutti />} />
      
      </Routes>
    </div>
  );
}
