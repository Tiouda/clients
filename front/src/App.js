import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> //charger le composant Home
        <Route path="/test" element={<Test />} /> // quand tu trouve le composant test, le charger
        <Route path="*" element={<Home />} /> // mettre composant * à la fin
      </Routes>
    </BrowserRouter>
  );
}

export default App;
