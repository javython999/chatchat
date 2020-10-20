import React from 'react';
import stlyes from './footer.module.css';

const Footer = (props) => (
    <div className={stlyes.footerWrap}>
      <img className={stlyes.footerLogo} src='/images/paperplane.png' alt='footerLogo'/>
    </div>
  );

export default Footer;