import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Seccion from "./components/seccion/Seccion";
import Menu from "./components/menu/Menu";
import ListaCasas from "./components/casas/ListaCasas";
import GestionPociones from "./components/pociones/GestionPociones.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/casas" element={<ListaCasas />} />
          <Route path="/pociones" element={<GestionPociones />} />
          <Route path="/personajes" element={<ListaCasas />} />

          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;