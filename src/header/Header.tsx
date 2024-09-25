import styles from './Header.module.css'
import Logo from '../assets/Bookclube-branco.png'
import Icon from '../assets/user-iconn.png'

function Header(){

  return(
    <header>
      <nav className={styles.navbar}> 

        <div className={styles.logo}>
          <img src={Logo} alt="Logo do site"/>
        </div>
        
        <ul className={styles.navlinks}>
          <li><a href="#"><strong>O que é Bookclub?</strong></a></li>
          <li><a href="#"><strong>Contato</strong></a></li>
        </ul>
        <div className={styles.account}>
          <img src={Icon} alt="foto da conta"/>
          <a href="#"><strong>Adiminstrtador</strong></a>
        </div>

      </nav>
    </header>
  )
}
export default Header;