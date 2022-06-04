import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Sched from "./screens/Sched";
import Itin from "./screens/Itin";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itin" element={<Itin />}></Route>
        <Route path="/sched" element={<Sched />}></Route>
      </Routes>
    </>
  );
}

export default App;
