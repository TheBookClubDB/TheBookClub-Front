import React from 'react';
import Button from '@mui/material/Button';
import styles from './botao.module.css';

interface ButtonProps {
  onClick: () => void;
  texto: string;
  variante?: 'outlined' | 'contained';
}

const Botao: React.FC<ButtonProps> = ({ onClick, texto, variante }) => {
  return (
    <Button
      onClick={onClick}
      variant={variante}
      size="large"
      className={styles.botao}
    >
      {texto}
    </Button>
  );
};

export default Botao;
