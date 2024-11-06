import React, { useState } from 'react';
import styles from './UserTable.module.css';
import Icon from '../../assets/_filter.png';
import Symbol from '../../assets/_sorter.png'


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
    <div className={styles.userTableContainer}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th className={styles.sortable}>Nome <span className={styles.sortIcon}><img src={Icon} role= 'Icone' alt= 'icon' /></span></th>
            <th className={styles.sortable}>Data de Nascimento <span className={styles.sortIcon}><img src={Symbol} role= 'Icone' alt= 'icon'/></span></th>
            <th className={styles.sortable}>Gênero <span className={styles.sortIcon}><img src={Icon} role= 'Icone' alt= 'icon' /></span></th>
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
                <span className={styles.actionLink} onClick={() => handleEdit(user.id)}>Editar</span>
                <span className={styles.actionLink} onClick={() => handleDelete(user.id)}>Excluir</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
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

