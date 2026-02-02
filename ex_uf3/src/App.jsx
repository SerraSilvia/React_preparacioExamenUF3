import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Inici from "./pages/inici";
import Imatges from "./pages/imatges";
import Navbar from "./components/navbar";
import Contacte from "./pages/contacte";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/inici" element={<Inici />} />
        <Route path="/imatges" element={<Imatges />} />
        <Route path="/contacte" element={<Contacte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
