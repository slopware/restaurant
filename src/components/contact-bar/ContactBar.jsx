import React from 'react'
import "material-icons/iconfont/material-icons.css";
import { Cinzel } from "next/font/google";
import styles from "./contactbar.module.css";

const font = Cinzel({ subsets: ["latin"], weight: ["400"] });

function ContactBar() {
  return (
    <div className={styles.container} >
        <span className={`material-icons ${styles.icon}`}>location_on</span>
        <p className={`${font.className} ${styles.text}`}>
          4003 N. Andrews Ave. Oakland Park, FL 33309
        </p>
        <span className="material-icons">phone</span>
        <p className={`${font.className} ${styles.text}`}>
          954-566-5333 or 954-644-3766
        </p>
      </div>
  )
}

export default ContactBar