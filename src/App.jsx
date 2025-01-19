import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Instrucciones from "./Inicio";
import Juego from "./vistas/Juego";
import Partidas from "./Partidas";
import Ranking from "./Ranking";

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="./vistas/Juego">Juego</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Partidas">Partidas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Ranking">Ranking</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Instrucciones />} />
        <Route path="./vistas/Juego" element={<Juego />} />
        <Route path="/Partidas" element={<Partidas />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </div>
  </Router>
);

export default App;