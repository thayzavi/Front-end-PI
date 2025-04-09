import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 

function Admin() {
    return (
        <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}</div>
    );
  }
  
  export default Admin; 