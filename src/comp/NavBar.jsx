import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'


function NavBar(){
    return(
    
        <div className={styles.list}>
                
              <Link className={styles.item} to="/">testeUm</Link>
            
            
              <Link className={styles.item} to="/testeDois">testeDois</Link>
          
          
              <Link className={styles.item} to="/testeTres">testetres</Link>
          
            
        </div>
    )
    }
    
    export default NavBar