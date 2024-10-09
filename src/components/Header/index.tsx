import styles from './Header.module.css'
import Logo from '../../assets/Bookclube-branco.png'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>

        <div className={styles.logo}>
          <Link to={'/'}>
            <img src={Logo} role='logo' alt="Logo do site"/>
          </Link>
        </div>

        <div className={styles.account}>
          <div className={styles.avatar}>
            <Avatar alt='Avatar' variant='circular'>
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


