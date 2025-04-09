import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DetalhamentoCaso from "./pages/DetalhamentoCaso";
import GerarNovoCaso from "./pages/GerarNovoCaso";
import GerarLaudo from "./pages/GerarLaudo";
import BancoOdontologico from "./pages/BancoOdontologico";
import Admin from "./adm/Admin";
import Cadastrar from "./adm/Cadastrar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/detalhamento/:id" element={<DetalhamentoCaso />} />
            <Route path="/gerar-novo-caso" element={<GerarNovoCaso />} />
            <Route path="/gerar-laudo/:id" element={<GerarLaudo />} />
            <Route path="/banco-odontologico" element={<BancoOdontologico />} />
            <Route path = "/admin" element={<Admin/>} />
            <Route path = "/cadastrar" element={<Cadastrar/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;