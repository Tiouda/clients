import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import PageClient from './pages/PageClient';
import SuppClient from "./pages/SuppClient";
import MajClient from "./pages/MajClient";
import PageAjout from "./pages/PageAjout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> //charger le composant Home
        <Route path="/test" element={<Test />} /> // quand tu trouve le composant test, le charger
        <Route path="/clients/:id" name="PageClient" element={<PageClient />} /> // route pour le router
        <Route path="*" element={<Home />} /> // mettre composant * Ã  la fin
        <Route path="/clients/supp/:id" element={<SuppClient />} />
        <Route path="/clients/modif/:id" element={<MajClient />} />
        <Route path="/clients/ajout" element={<PageAjout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;