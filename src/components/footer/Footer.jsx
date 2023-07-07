import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Catfish Deweys. All rights reserved.</div>
      <div className={styles.social}>
        <a href="https://www.facebook.com/catfishdeweys.restaurant/" target="_blank">
          <Image
            className={styles.icon}
            src="/facebook.png"
            width={32}
            height={32}
            alt="facebook page"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
