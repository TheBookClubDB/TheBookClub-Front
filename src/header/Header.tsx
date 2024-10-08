import styles from './Header.module.css'
import Logo from '../assets/Bookclube-branco.png'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <img src={Logo} alt="Logo do site" />
        </div>

        <div className={styles.account}>
          <div className={styles.avatar}>
            <Avatar alt='Avatar' variant='circular'>
              <PersonIcon />
            </Avatar>
          </div>
          <Link to={'/adm'}>
            Olá, Usuário
          </Link>
        </div>
        

      </nav>
    </header>
  );
  
}

export default Header;


