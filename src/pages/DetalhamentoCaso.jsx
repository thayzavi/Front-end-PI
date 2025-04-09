import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Detalhamento.css"


function DetalhamentoCaso() {

  const caso = {
    nome: "Caso 1",
    responsavel: "Dr. Silva",
    status: "Em andamento",
    localizacao: "Rua X, 123",
    descricao: "Descrição detalhada do caso...",
    data: "Dia do ocorrido ",
    informacao: "Informações adicionas",
    imagem:"imagem da evidencia",
  };

  return (

    <div className="dashboard-container">
          <Sidebar /> {/* Adicionando o sidebar */}

    <div className="detalhamento-container">
      <h2>Detalhamento do Caso: {caso.nome}</h2>
      <p><strong>Responsável:</strong> {caso.responsavel}</p>
      <p><strong>Status:</strong> {caso.status}</p>
      <p><strong>Localização:</strong> {caso.localizacao}</p>
      <p><strong>Descrição:</strong> {caso.descricao}</p>
      <p><strong>Data:</strong> {caso.data}</p>
      <p><strong>Informações:</strong>{caso.informacao}</p>
      <p><strong>Imagem:</strong> {caso.imagem}</p>
      <button>Baixar Anexos</button>
    </div>
  </div>
  );
}

export default DetalhamentoCaso;
