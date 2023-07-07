import Image from "next/image";
import styles from "./page.module.css";
import { Abril_Fatface, Noto_Sans } from "next/font/google";
import Map from "@/components/map/Map";
import snowCrab from "public/seasoned-crab.jpg";
import catfish from "public/catfish.jpg";
import crawfish from "public/crawfish.jpg";
import shrimp from "public/steamed-shrimp.jpg";
import stoneCrab from "public/stone-crab.jpg";
import ribs from "public/ribs.jpg";

const fat_face = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const noto_sans = Noto_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className={`${fat_face.className} ${styles.homeContainer}`}>
      <div className={styles.hero}>
        <h1 className={styles.heroHeader}>More catfish. Your catfish.</h1>
        <p className={styles.heroText}>Eat more catfish.</p>
        <div className={`${styles.heroButtons} `}>
          <button className={`${styles.heroButton} ${noto_sans.className}`}>
            Explore
          </button>
          <button className={`${styles.heroButton} ${noto_sans.className}`}>
            Order Now
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            The transition property in the .heroButton class is used to animate
            changes to the button's properties over a small duration, providing
            a smoother visual effect when the button is hovered.
          </div>
        </div>
        <Image src={catfish} alt="catfish" className={styles.img} />
      </div>

      <div className={styles.card}>
        <Image src={snowCrab} alt="snowcrab" className={styles.img} />
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            The transition property in the .heroButton class is used to animate
            changes to the button's properties over a small duration, providing
            a smoother visual effect when the button is hovered. The syntax is
            transition: [property] [duration] [timing-function]. This causes the
            changes in box-shadow and transform to occur over a 0.3-second
            interval, using an 'ease' timing function for a more natural effect.
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            The transition property in the .heroButton class is used to animate
            changes to the button's properties over a small duration, providing
            a smoother visual effect when the button is hovered.
          </div>
        </div>
        <Image src={crawfish} alt="crawfish" className={styles.img} />
      </div>

      <div className={styles.card}>
        <Image src={shrimp} alt="shrimp" className={styles.img} />
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            The transition property in the .heroButton class is used to animate
            changes to the button's properties over a small duration, providing
            a smoother visual effect when the button is hovered.
          </div>
        </div>
      </div>

      {/* <div className={styles.map}>
        <Map />
      </div> */}
    </div>
  );
}
