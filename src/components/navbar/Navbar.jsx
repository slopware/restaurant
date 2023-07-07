"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import "material-icons/iconfont/material-icons.css";
import logo from "public/logo.png";


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Takeout",
    url: "/takeout",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  const path = usePathname();
  return (
    <>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              <span
                className={
                  path === link.url
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
