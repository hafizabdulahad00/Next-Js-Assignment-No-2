import React from 'react'
import Styles from './header.module.css'
import Image from 'next/image';
import logo from '../Header/logo.png'
import Link from 'next/link'

const Header = () => {
    return (
    <div className = {Styles.mainContainer}>
        <div>
           <Image src={logo} className={Styles.logo} alt={'logo'}/>
           </div>
        <div>
        <ul className={Styles.linkText}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/about">About</Link></li>
            <li><Link href = "/menu">Menu</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
            <button className={Styles.btn}>Order Now</button>
        </div>

    </div>
      );
  }
  
  export default Header