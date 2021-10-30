import React from 'react';

import styles from './Footer.module.css';

function Footer() {

    const year =new Date().getFullYear();
    return (
        <div className = {styles.footer}>
        <p>Made with ❤ by Nabeel Ahmed </p>
        <p className ={styles.copyright}>Copyright ⓒ {year}</p>
        </div>
    )
}

export default Footer;