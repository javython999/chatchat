import React from 'react';
import styles from './header.module.css'

const logo = 'https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180284/segsnloldaod0ogus9as.png';
const Header = ({ onLogout }) => (
  <div className={styles.headerWrap}>
      <h1>ChatChat</h1>
      <img className={styles.logo} src={logo} alt='logo'/>
      {
        onLogout && (<button className={styles.logOut} onClick={onLogout}>LogOut</button>)
      }
  </div>
  );

export default Header