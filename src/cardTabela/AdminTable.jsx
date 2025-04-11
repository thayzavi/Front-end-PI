import React from "react";
import "./Table.css"

const AdminTable = () =>{
    const users =[
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'},
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'}
    ];

    return(
        <div className="container">
            <h2>Lista de Usuários</h2>
            <table className="admin-table">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Cargo</th>
                    <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key = {user.nome}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.cargo}</td>

                            <td>
                                <button className="excluir">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;