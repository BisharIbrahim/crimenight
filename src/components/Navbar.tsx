import React from 'react';
import styles from '@styles/Navbar.module.css'
import reactLogo from '@assets/react.svg'
import { Link } from 'react-router-dom'


const Navbar: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}> 
      <nav className={styles['skew-menu']}>
        <a href="/"><img src={reactLogo} className={styles['navbar__logo']}/></a>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/DigitalLibrary">Digital Library</Link></li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar