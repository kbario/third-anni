import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import Home from "./screens/Home";
import Sched from "./screens/Sched";
import Itin from "./screens/Itin";
import logo from "./logo.svg";
import "./App.css";

import MyMenu from "./components/MyMenu";

function App() {
  return (
    <Flex direction="column" h="100vh" w="100vw" overflow="hidden">
      <Routes>
        <Route path="/third-anni" element={<Home />} />
        <Route path="/third-anni/itin" element={<Itin />}></Route>
        <Route path="/third-anni/sched" element={<Sched />}></Route>
      </Routes>
    </Flex>
  );
}

export default App;
