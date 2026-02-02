import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Inici from "./pages/inici";
import Imatges from "./pages/imatges";
import Navbar from "./components/navbar";
import Contacte from "./pages/contacte";

function App() {
  return (
    <BrowserRouter>
    <div className="top-bar">
      <h1 className="logo">ArtGallery</h1>
      <Navbar />
    </div>
      
      <Routes>
        <Route path="/inici" element={<Inici />} />
        <Route path="/imatges" element={<Imatges />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/" element={<Inici />} />{/* Ruta per defecte per si l'usuari entra a "/" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
