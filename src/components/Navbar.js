import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          BlogApp
        </Link>
        <div className={styles.navbarLinks}>
          <Link to="/" className={styles.navbarLink}>Home</Link>
          <Link to="/create" className={styles.navbarLink}>Create Post</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
