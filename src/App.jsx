import Home from "./components/Home";
import Signup from "./components/Signup";
import Habitos from "./components/Habitos";
import Today from "./components/Today";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Today />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
