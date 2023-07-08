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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque porttitor leo, non molestie lorem dapibus ut. Donec
            velit libero, pulvinar eu elit vel, aliquam vulputate nibh.
          </div>
        </div>
        <Image src={catfish} alt="catfish" className={styles.img} />
      </div>

      <div className={styles.card}>
        <Image src={snowCrab} alt="snowcrab" className={styles.img} />
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque porttitor leo, non molestie lorem dapibus ut. Donec
            velit libero, pulvinar eu elit vel, aliquam vulputate nibh. Nullam
            et malesuada risus. Nam eleifend interdum lacinia. Ut nec venenatis
            tellus. Cras auctor justo quis lacus mattis molestie. Aliquam erat
            volutpat.
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque porttitor leo, non molestie lorem dapibus ut. Donec
            velit libero, pulvinar eu elit vel, aliquam vulputate nibh. Nullam
            et malesuada risus.
          </div>
        </div>
        <Image src={crawfish} alt="crawfish" className={styles.img} />
      </div>

      <div className={styles.card}>
        <Image src={shrimp} alt="shrimp" className={styles.img} />
        <div className={styles.cardContent}>
          <h3 className={styles.text}>Home page</h3>
          <div className={`${styles.text} ${noto_sans.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            pellentesque porttitor leo, non molestie lorem dapibus ut. Donec
            velit libero, pulvinar eu elit vel, aliquam vulputate nibh. Nullam
            et malesuada risus. Nam eleifend interdum lacinia. Ut nec venenatis
            tellus. Cras auctor justo quis lacus mattis molestie. Aliquam erat
            volutpat.
          </div>
        </div>
      </div>

      {/* <div className={styles.map}>
        <Map />
      </div> */}
    </div>
  );
}
