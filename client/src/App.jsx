import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/details/DetailView";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{marginTop: 54}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
