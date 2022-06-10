import { Routes, Route, Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Home from "./screens/Home";
import Sched from "./screens/Sched";
import Itin from "./screens/Itin";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Flex direction="column" h="100vh" w="100vw" overflow="hidden">
      <Routes>
        <Route path="/init" element={<Home />} />
        <Route path="/third-anni/itin" element={<Itin />}></Route>
        <Route path="/third-anni/" element={<Sched />}></Route>
      </Routes>
    </Flex>
  );
}

export default App;
