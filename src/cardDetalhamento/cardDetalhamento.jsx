import React from "react";
import Sidebar from "../components/Sidebar";
import "../cardDetalhamento/Detalhamento.css"
import { createSessionStorage, useParams } from "react-router-dom";

const casos = [
  { id: 1, titulo: "Identificação de vítima", responsavel: "Dr. A", status: "Concluído", localizacao: "Rua 1", descricao: "Detalhes do caso 1", data: "01/01/2023", informacao: "Info 1", imagem: "img1.jpg" },
  { id: 2, titulo: "Lesão Odontológica", responsavel: "Dra. B", status: "Fechado", localizacao: "Rua 2", descricao: "Detalhes do caso 2", data: "02/01/2023", informacao: "Info 2", imagem: "img2.jpg" },
  { id: 3, titulo: "Análise de Mordida", responsavel: "Dr. C", status: "Em andamento", localizacao: "Rua 3", descricao: "Detalhes do caso 3", data: "03/01/2023", informacao: "Info 3", imagem: "img3.jpg" },
  { id: 4, titulo: "Identificação de vítima", responsavel: "Dra. D", status: "Concluído", localizacao: "Rua 4", descricao: "Detalhes do caso 4", data: "04/01/2023", informacao: "Info 4", imagem: "img4.jpg" },
];

function DetalhamentoCaso() {
  const {id} = useParams();
  const caso = casos.find((c) => c.id === parseInt(id));

  if (!caso) return <p>Caso não encontrado</p>

  return (

    <div className="container">
          <Sidebar /> {/* Adicionando o sidebar */}

    <div className="card">
      <h2>Detalhamento do Caso: {caso.nome}</h2>
      <p><strong>Responsável:</strong> {caso.responsavel}</p>
      <p><strong>Status:</strong> {caso.status}</p>
      <p><strong>Localização:</strong> {caso.localizacao}</p>
      <p><strong>Descrição:</strong> {caso.descricao}</p>
      <p><strong>Data:</strong> {caso.data}</p>
      <p><strong>Informações:</strong>{caso.informacao}</p>
      <p><strong className="evidencias">Imagem:</strong> {caso.imagem}</p>
      <button>Baixar Anexos</button>
    </div>
  </div>
  );
}

export default DetalhamentoCaso;
