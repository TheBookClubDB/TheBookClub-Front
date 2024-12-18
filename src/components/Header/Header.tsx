import styles from './Header.module.css';
import Logo from '../../assets/Bookclube-branco.png';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <Link to='/adm'>
            <img src={Logo} role="Logo" alt="Logo do site" />
          </Link>
        </div>

        <div className={styles.account}>
          <div className={styles.avatar}>
            <Avatar alt='Avatar' role='Avatar' variant='circular'>
              <PersonIcon />
            </Avatar>
          </div>
          <div className={styles.usuario}>
          
            Olá, Usuário

          </div>
        </div>
        

      </nav>
    </header>
  );
  
}

export default Header;


