import React from 'react'
import Styles from './footer.module.css'
import Link from 'next/link'
const Footer = () => {
    return(
        <div className={Styles.Footercontainer}>
            <div>
        <ul className={Styles.linkText1}>
            <li><Link href = "/">Home</Link></li>
            <li><Link href = "/about">About</Link></li>
            <li><Link href = "/menu">Menu</Link></li>
            <li><Link href = "/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={Styles.FooterBot}>
            <h4 className={Styles.FooterH1}>&#169; Burger Boom | All Right Reserved</h4></div>
        </div>

    )
}

export default Footer