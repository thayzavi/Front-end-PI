import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import jsPDF from "jspdf";
import "../styles/GerarLaudo.css";

  const GerarLaudo = () => {
    const [dados, setDados] = useState({
    numeroCaso: "",
    data: "",
    hora:"",
    perito:"",
    nomePaciente: "",
    nascimento: "",
    sexo: "",
    documento: "",
    filiacao: "",
    localExame: "",
    motivo: "",
    metodos: [],
    achados: "",
    diagnostico: "",
    grauCerteza: "",
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    if (type === "checkbox" ){
      setDados((prev) => ({
        ...prev,
        metodos: checked
        ?[...prev.metodos, value]
        : prev.metodos.filter((m) => m !== value),
      }));
    } else{
      setDados((prev) => ({...prev, [name]: value}));
    }
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("LAUDO ODONTOLÓGICO PERICIAL", 20, 20);

    doc.setFontSize(12);
    doc.text(`Número do Caso: ${dados.numeroCaso}`, 20, 30);
    doc.text(`Data: ${dados.data}`, 20, 40);
    doc.text(`Hora:${dados.hora}` , 20, 50 );
    doc.text(`Perito Responsável: ${dados.perito}`, 20, 70);

    doc.text("IDENTIFICAÇÃO DO EXAMINADO", 20, 80);
    doc.text(`Nome: ${dados.nomePaciente}`, 20, 90);
    doc.text(`Nascimento: ${dados.nascimento}`, 20, 100);
    doc.text(`Sexo: ${dados.sexo}`, 20, 110);
    doc.text(`Documento: ${dados.documento}`, 20, 120);
    doc.text(`Filtração: ${dados.filiacao}`, 20, 130);

    doc.text("INFORMAÇÃO DO EXAME", 20, 150);
    doc.text(`Local: ${dados.localExame}`, 20, 160);
    doc.text(`Motivo da Perícia: ${dados.motivo}`, 20, 170);
    doc.text(`Métodos Utilizados: ${dados.metodos.join(",")}`, 20, 180);

    
    doc.text("ACHADOS PERICIAIS", 20, 230);
    doc.text(`DESCRIÇÃO:${dados.achados}`, 20, 240);

    doc.text("CONCLUÇÃO", 20, 250);
    doc.text(`Diagnóstico: ${dados.diagnostico}`, 20, 260);
    doc.text(`Grau de certeza: ${dados.grauCerteza}`, 20, 267);

    doc.text("_______________________", 20, 280);
    doc.text(`${dados.perito}`, 20, 290);
    doc.text("Perito Responsável", 20, 300);

    doc.save("laudo_odontologico.pdf");
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o Sidebar */}

    <div className="gerar-laudo-container">
      <h2>Gerar Laudo</h2>

    <label>Número do Caso :</label>
    <input type="text" name="numeroCaso" onChange={handleChange}></input>

    <label>Data :</label>
    <input type="date" name="data" onChange={handleChange}></input>

    <label>Hora:</label>
    <input type="time" name="time" onChange={handleChange} />

    <label>Perito Responsável :</label>
    <input type="text" name="perito" onChange={handleChange}></input>

    <h3>Identificação do Examinado</h3>
    <label>Nome do Paciente :</label>
    <input type="text" name="numeroPacirnte" onChange={handleChange}></input>

    <label>Data de Nascimento</label>
    <input type="date" name="nascimento" onChange={handleChange}></input>

    <label>Sexo:</label>
    <select name="sexo" onChange={handleChange}>
      <option value="">Selecione</option>
      <option value="Masculino">Masculino</option>
      <option value="Feminino">Feminino</option>
    </select>

    <label>Documento:</label>
    <input type="text" name="documento" onChange={handleChange}></input>

    <label>Filiação</label>
    <input type="text" name="feliacao" onChange={handleChange}></input>

    <h3>Informações do Exame</h3>
    <label>Local:</label>
    <input type="text" name="localExame" onChange={handleChange}></input>

    <label>Motivos da Perícia:</label>
    <input type="text" name="motivo" onChange={handleChange}></input>

    <h4> Métodos Utilizados:</h4>
    <label>
      <input type="checkbox"
      name="metodos"
      value="Radiografia"
      onChange={handleChange} />
    Radiografia
    </label>
    <label>
      <input type="checkbox"
      name="metodos"
      value="Fotografia"
      onChange={handleChange} />
      Fotografia
    </label>
    <h3>Achados Periciais</h3>
    <textarea name="achados" onChange={handleChange}></textarea>

    <h3>Conclução</h3>
    <label>Diagnóstico Parcial</label>
    <textarea name="diagnostico" onChange={handleChange}></textarea>

    <label>Grau de Certeza</label>
    <select name="grauCerteza"onChange={handleChange}>
      <option value="">Selecione</option>
      <option value="Conclusivo">Conclusivo</option>
      <option value="Necessita de exames">Necessita de exames</option>
    </select>
        <button onClick={gerarPDF}>Gerar PDF</button>
      </div>
    </div>
  );
}

export default GerarLaudo;
