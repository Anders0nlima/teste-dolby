import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'


function NavBar(){
    return(
    
        <div className={styles.list}>
                
              <Link className={styles.item} to="/">testeUm</Link>
            
            
              <Link className={styles.item} to="/testeDuis">testeDois</Link>
          
          
              <Link className={styles.item} to="/testeTres">testetres</Link>

              <Link className={styles.item} to="/testeQuatro">testeQuatro</Link>

              <Link className={styles.item} to="/testeQuatro">testeCinco</Link>

              <Link className={styles.item} to="/testeQuatro">TesteSeis</Link>
          
            
        </div>
    )
    }
    
    export default NavBar