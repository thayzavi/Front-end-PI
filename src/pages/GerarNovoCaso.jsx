import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import "../styles/global.css"

function GerarNovoCaso() {
  const [responsavel, setResponsavel] = useState("");
  const [nomedocaso, setnomedoCaso] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setdescricao] = useState("");
  const [upload, setupload] = useState("");
  const [informacoes, setInformacoes] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault(); //evita o carregamento da página
  };
  
  return (
    <div className="dashboard-container">
      <Sidebar/>

      <div className="container">
        <h2>Adicionar Novo Caso </h2>

       <form onSubmit={handleSubmit}>

       <label> Nome do Caso :</label>
        <input type="text"
         value={nomedocaso}
         onChange={(e) => setnomedoCaso(e.target.value)}></input>

        <label> Responsavel :</label>
        <input type="text"
         value={responsavel}
         onChange={(e) => setResponsavel(e.target.value)}></input>

         <label> Data :</label>
         <input type="date"
         value={data}
         onChange={(e) => setData(e.target.value)}></input>

        <label> Hora :</label>
        <input type="time"
         value={hora}
         onChange={(e) => setHora(e.target.value)}></input>

        <label> Local :</label>
        <input type="text"
         value={local}
         onChange={(e) => setLocal(e.target.value)}></input>

        <label> Descrição:</label>
        <input type="text"
         value={descricao}
         onChange={(e) => setdescricao(e.target.value)}></input>

        <label> Evidências:</label>
        <input type="file"
         accept="image/*, .pdf, .doc, .docx"
         onChange={(e) => setupload(e.target.files[0])}
         capture="environment"
         multiple></input>

        <label> Informações:</label>
        <input type="text"
         value={informacoes}
         onChange={(e) => setInformacoes(e.target.value)}></input>
         
         <button type="submit">Adicionar Novo Caso</button>
         </form>
      </div>
    </div>
  );

}

export default GerarNovoCaso;
 