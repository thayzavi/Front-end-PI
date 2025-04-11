import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import "../styles/global.css"

function BancoOdontologico() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [resultados, setResultados] = useState([]);

  const categorias = ["Todos", "Radiografias", "Exames"]

  const handleSearch = () => {
    console.log("Pesquisando casos:", pesquisa);
    setResultados([
      { nome: "Caso 1", responsavel: "Dr. Silva" },
      { nome: "Caso 2", responsavel: "Dr. Souza" },
    ]);
  };

  return (

    <div className="container">
          <Sidebar /> {/* Adicionando o sidebar */}

    <div className="banco-container">
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquisar casos"
      />
      <select
      value={categoriaAtiva}
      onChange={(e) => setCategoriaAtiva(e.target.value)}>
        {categorias.map((cat)=> (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Pesquisar</button>
      <div className="resultados">
        {resultados.map((caso, index) => (
          <div key={index} className="card">
            <h3>{caso.nome}</h3>
            <p>{caso.responsavel}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default BancoOdontologico;
