import styles from "./Footer.module.css";

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
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/alpinesports_andermatt/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.3a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm4.7-7.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/alpinesportsandermatt"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            <a
              href="https://www.tripadvisor.com/Attraction_Review-g198795-d8780960-Reviews-Alpine_Sports_Andermatt-Andermatt_Canton_of_Uri_Swiss_Alps.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Tripadvisor"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8c4.4 0 8 3.6 8 8s-3.6 8-8 8zm3.3-12.8c.3.5.5 1 .5 1.5s-.2 1-.5 1.5c-.3.5-.8.8-1.3 1-.5.2-1.1.3-1.7.3s-1.2-.1-1.7-.3c-.5-.2-1-.5-1.3-1-.3-.5-.5-1-.5-1.5s.2-1 .5-1.5c.3-.5.8-.8 1.3-1 .5-.2 1.1-.3 1.7-.3s1.2.1 1.7.3c.5.2 1 .5 1.3 1zM12 9c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0 4c-.8 0-1.5.7-1.5 1.5S11.2 16 12 16s1.5-.7 1.5-1.5S12.8 13 12 13z" />
              </svg>
            </a>

          </div>
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
