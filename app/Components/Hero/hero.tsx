import React from 'react'
import Styles from './hero.module.css'

const Hero = () => {
    return(
        <div className={Styles.heroMain}>
            <div className={Styles.heroChild}>
                <h1 className={Styles.heroH1}>Savor the flavor</h1>
                <h3 className={Styles.heroH3}>Explore Our delicious cuisine</h3>
                <button className={Styles.heroBtn}>Order Now</button>
            </div>
        </div>

    );
}

export default Hero;