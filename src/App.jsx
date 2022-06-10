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
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const apiKey = "55fdc3ae47c8791dbc86b7d4d71965b4";
    async function getWeather() {
      const resC = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=northbridge,wa,au&appid=${apiKey}`
      );
      const coords = await resC.json();
      const resW = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0].lat}&lon=${coords[0].lon}&units=metric&appid=${apiKey}`
      );
      const weather = await resW.json();
      setCoords(coords[0]);
      setWeather(weather);
    }
    getWeather();
  }, []);

  return (
    <Box pos="relative">
      <Flex direction="column" h="100vh" w="100vw" overflow="hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itin" element={<Itin />}></Route>
          <Route path="/sched" element={<Sched />}></Route>
        </Routes>
      </Flex>
      <MyMenu />
    </Box>
  );
}

export default App;
