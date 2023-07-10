"use client";

import "./globals.css";
import styles from "./layout.module.css";
import "material-icons/iconfont/material-icons.css";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Sans } from "next/font/google";

import Footer from "@/components/footer/Footer";
import ContactBar from "@/components/contact-bar/ContactBar";

import logo from "public/logo.png";

const noto_sans = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

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

// export const metadata = {
//   title: "Catfish Deweys",
//   description: "The official website for Catfish Deweys",
// };

export default function RootLayout({ children }) {
  const path = usePathname();
  const stickyRef = useRef(null);
  const [sticky, setSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);

  useEffect(() => {
    if (!stickyRef.current) {
      return;
    }
    setStickyOffset(stickyRef.current.offsetTop);
  }, [stickyRef, setStickyOffset]);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) {
        return;
      }

      const shouldBeSticky = window.scrollY > stickyOffset;
      setSticky(shouldBeSticky);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSticky, stickyRef, stickyOffset]);

  return (
    <html lang="en">
      <body>
        <ContactBar />
        <div
          ref={stickyRef}
          className={`${noto_sans.className} ${styles.navContainer} ${
            sticky ? styles.sticky : null
          }`}
        >
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src={logo} alt="logo" className={styles.logo} />
            </Link>
          </div>

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
          <nav className={styles.burgerNav}>
            <div className={styles.burgerToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className={styles.burgerMenu}>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Menu</li>
                </a>
                <a href="#">
                  <li>Takeout</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </nav>
        </div>

        {sticky && (
          <div
            style={{
              height: `${stickyRef.current?.clientHeight}px`,
            }}
          />
        )}
        {children}

        <Footer />
      </body>
    </html>
  );
}
