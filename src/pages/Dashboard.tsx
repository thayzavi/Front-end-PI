// src/pages/Dashboard.js
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import "../styles/global.css"

function Dashboard() {

  const navigate = useNavigate();

    const casos = [ //casos
      {
        id: 1,
        titulo: "Identificação de vítima",
        data: "02/05/2023",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Concluído",
      },
      {
        id: 2,
        titulo: "Lesão Odontológica",
        data: "02/05/2023",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Fechado",
      },
      {
        id: 3,
        titulo: "Análise de Mordida",
        data: "02/05/2023",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Em andamento",
      },
      {
        id: 4,
        titulo: "Identificação de vítima",
        data: "02/05/2023",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "Concluído",
      },
  ];
  const getStatusClass = (status) => { 
    switch (status) {
      case "Concluído":
        return "status-concluido";
      case "Fechado":
        return "status-fechado";
      case "Em andamento":
        return "status-andamento";
      default:
        return "";
    }
  };


  const handleClick = () => {
    navigate('/gerar-novo-caso');
  };
  return (
    <div className="container">
      <Sidebar /> {/* Adicionando o sidebar */}
      
      <div className="content-container">
        <div className="header-dashboard"> 

        <div>
        <h2> Casos em andamento </h2>
        <p className="subtitulo"> Casos</p>
       </div>
      <button className="btn-novo-caso" onClick={handleClick}>criar novo caso </button>
    </div>

      <div className="cards-container">
          {casos.map((caso) => (
            <div key={caso.id} className="card">
              <h3>{caso.titulo}</h3>
              <p className="data">{caso.data}</p>
              <p className="descricao">{caso.descricao}</p>
              <span className={`status ${getStatusClass(caso.status)}`}>
                {caso.status}
              </span>
              <Link to={`/detalhamento/${caso.id}`} className="detalhes">
               Ver detalhes
           </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
