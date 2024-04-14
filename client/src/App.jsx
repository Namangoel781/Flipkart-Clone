import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/details/DetailView";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Cart from "./components/cart/Cart";
import FormPage from "./components/FormPage/Form";
import Success from "./components/payment/Success";
import Cancel from "./components/payment/cancel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
