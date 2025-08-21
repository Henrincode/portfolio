import { useState } from 'react'
import './styles/global.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import Sobre from "./pages/Sobre";
// import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota com layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Padrão / */}
          {/* <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}