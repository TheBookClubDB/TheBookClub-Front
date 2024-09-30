import styles from './Header.module.css'
import Logo from '../../assets/Bookclube-branco.png'
import Icon from '../../assets/user-iconn.png'
import { Link } from 'react-router-dom'

function Header(){

  return(
    <header>
      <nav className={styles.navbar}> 

        <div className={styles.logo}>
          <Link to={'/'}>
            <img src={Logo} role='logo' alt="Logo do site"/>
          </Link>
        </div>
        
        <ul className={styles.navlinks}>
          <Link to={'/sobre'}>
            <li>O que é Bookclub?</li>
          </Link>
          <Link to={'/contato'}>
            <li>Contato</li>
          </Link>
        </ul>
      
        <div className={styles.account}>
          <img src={Icon} alt="foto da conta"/>
          <Link to={'/adm'}>
            Administrador
          </Link>
        </div>
        

      </nav>
    </header>
  )
}
export default Header;