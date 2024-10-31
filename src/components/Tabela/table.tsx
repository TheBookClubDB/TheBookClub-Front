import React, { useState } from 'react';
import './UserTable.module.css'; 

interface User {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
}

const Tabela: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Gabriel Garcia Marquez', birthDate: '00/00/0000', gender: 'Masculino' },
    { id: 2, name: 'Ismar Souza', birthDate: '00/00/0000', gender: 'Masculino' },
    { id: 3, name: 'George Orwell', birthDate: '00/00/0000', gender: 'Masculino' },
    { id: 4, name: 'Clarice Lispector', birthDate: '00/00/0000', gender: 'Masculino' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (id: number) => {
    alert(`Editar usuário com ID: ${id}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const displayedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th className="sortable">Nome <span className="sort-icon">▾</span></th>
            <th className="sortable">Data de Nascimento <span className="sort-icon">▴</span></th>
            <th className="sortable">Gênero <span className="sort-icon">▾</span></th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.birthDate}</td>
              <td>{user.gender}</td>
              <td>
                <span className="action-link" onClick={() => handleEdit(user.id)}>Editar</span>
                <span className="action-link" onClick={() => handleDelete(user.id)}>Excluir</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {'<'}
        </button>
        <span>{currentPage}</span>
        <button 
          disabled={currentPage === Math.ceil(users.length / itemsPerPage)} 
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Tabela;
