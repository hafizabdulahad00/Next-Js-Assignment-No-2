import React from 'react'
import Styles from './Call-to-action.module.css'

const CalltoAction = () => {
    return(
        <div className={Styles.Callcontainer}>
            <div>
              <h1 className={Styles.CallH1}>Get Started to your culinary journey</h1>
              <button className={Styles.CallBtn}>Order Now!</button>
            </div>
        </div>
    )
}

export default CalltoAction