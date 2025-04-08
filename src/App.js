import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { useState } from "react";
import { Routes, Route } from "react-router";
import Grid from "./components/Grid";


function App() {


  return (
    <div className="flex flex-col items-center h-screen justify-start">
      <Navbar />
      <Routes>
        <Route path="" index />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Grid />
    </div>
  );
}

export default App;
