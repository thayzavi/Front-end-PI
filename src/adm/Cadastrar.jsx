import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import "../adm/Cadastro.css"


function RegisterPerito(){
  const [toast, setToast] = useState({show:false, Message:"", type:""});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [acesso, setAcesso] = useState("");

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({
      show: true, message, type});
      setTimeout(() => setToast({show: false, message:"", type:""}), 3000);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      //func para cadastra o perito({nome, email, cargo})

      console.log("Perito cadastrado");

      setNome("");
      setEmail("");
      setCargo("");
      setAcesso("");
      showToast("Perito Cadastrado");
    } catch(err){console.error("Erro ao cadastrar");
      showToast("Erro ao cadastrar");
    }
  };

  const handleButtonClick = () => {
    navigate("");
  };

  return(
    <div className="dashboard-container">
          <Sidebar /> {/* Adicionando o sidebar */}
      
       <h2>Cadastrar Novo Perito </h2>
      {toast.show && <div className={`toast ${toast.type}`}>
        {toast.message}</div>}   

        <form onSubmit={handleSubmit} className="login-form">

         <div>
          <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              />
          </div> 
          <div>
          <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div> 

          <div>
          <label>Cargo:</label>
            <input
              type="text"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
              />

              <label>Tipo de acesso </label>
              <input
              type="text"
              value={acesso}
              onChange={(e) => setCargo(e.target.value)}
              required
              />
          </div> 

          <button type="submit">Cadastrar</button>

          <button onClick={handleButtonClick}>Ver Lista de Peritos</button>
        </form>       
    </div>
  );
}

export default RegisterPerito;