import styles from "./Footer.module.css";
import SocialIcons from "./SocialIcons"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>Alpine Sports Andermatt</h3>
          <p className={styles.tagline}>
            Premium ski instruction in the heart of the Swiss Alps.
          </p>

          {/* Social Icons */}
          <SocialIcons />
        </div>

        {/* Links */}
        <div className={styles.links}>
          <h4 className={styles.title}>Explore</h4>
          <a href="/about" className={styles.link}>About</a>
          <a href="/ski" className={styles.link}>Ski Lessons</a>
          <a href="/book-now" className={styles.link}>Book Now</a>
          <a href="/contact" className={styles.link}>Contact</a>
        </div>

        {/* Legal */}
        <div className={styles.links}>
          <h4 className={styles.title}>Legal</h4>
          <a href="about/terms" className={styles.link}>Terms & Conditions</a>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h4 className={styles.title}>Contact</h4>
          <p>Andermatt, Switzerland</p>
          <p>Gotthardstrasse 63</p>
          <p>6490 Andermatt</p>
          <p>+41 78 875 2450</p>
          <p>info@alpinesportsandermatt.com</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Alpine Sports Andermatt. All rights reserved.</p>
      </div>
    </footer>
  );
}
