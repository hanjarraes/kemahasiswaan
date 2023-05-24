import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./assets/scss/styles.scss";
import 'aos/dist/aos.css';
import 'remixicon/fonts/remixicon.css';

import Home from "./pages/Home";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/Berita/Detail";
import Galery from "./pages/Galery";
import Prestasi from "./pages/Prestasi";
import Login from "./pages/Login";
import InfoBeasiswa from "./pages/InfoBeasiswa";
import PenerimaBeasiswa from "./pages/PenerimaBeasiswa";
// import Beasiswa from "./pages/Beasiswa";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/berita" element={<Berita type={'berita'} />} />
          <Route path="/agenda" element={<Berita type={'agenda'} />} />
          <Route path="/:judul/:id/detail" element={<BeritaDetail />} />

          <Route path="/galery" element={<Galery />} />
          <Route path="/prestasi" element={<Prestasi />} />
          <Route path="/info-beasiswa" element={<InfoBeasiswa />} />
          <Route path="/peneriman-beasiswa" element={<PenerimaBeasiswa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
