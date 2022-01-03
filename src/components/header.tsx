// import { useLingui } from '@lingui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './header.module.scss';
import img from '../assets/images/header1.png';
import right from '../assets/images/right.png';
import logo from '../assets/images/logo.png'
export const Header = observer(() => {



    return (
        <div>
            <div className={styles.header1}>
            <img src={img} alt={''} className={styles.img}/></div>
            <div className={styles.header2}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="default.asp">Girls</a></li>
                    <li className={styles.li}><a href="news.asp">Boys</a></li>
                    <li className={styles.li}><a href="contact.asp">Baby girls</a></li>
                    <li className={styles.li}><a href="about.asp">Baby boys</a></li>
                    <li className={styles.li}><a href="about.asp">Newborn</a></li>
                </ul>
            </nav>
            <img src={logo} alt={''} className={styles.logo}/>
            <img src={right}  alt={''} className={styles.right}/>


           </div>

    </div>
    );
});