/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import SignUpComponent from "./components/SignUpComponent";
import Pharma from "./components/ImgCheck";
import ImgCheck from "./components/ImgCheck";

function App() {
 
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUpComponent/>} />
        <Route path="/img" element={<ImgCheck/>} />
      </Routes>
  );
}

export default App;
