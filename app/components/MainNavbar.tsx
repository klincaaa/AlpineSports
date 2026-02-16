"use client";

import { useEffect, useState } from "react";
import styles from "./MainNavbar.module.css";
import alpineLogo from "@/public/images/AlpineSportLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // To achieve this, we need to:
  // 1. Detect scroll on window.
  // 2. Change a state, e.g. 'scrolled', to true when window.scrollY > some threshold (like 30px).
  // 3. Add a new class that applies a white & slightly transparent background when scrolled.

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect click outside the menu-list to close the slide-in menu
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      const menuList = document.querySelector(`.${styles["menu-list"]}`);
      const menuToggle = document.querySelector(`.${styles["menu-toggle"]}`);
      if (
        menuList &&
        !menuList.contains(event.target as Node) &&
        menuToggle &&
        !menuToggle.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, styles["menu-list"], styles["menu-toggle"]]);

  return (
    <nav className={`${styles.menu} ${scrolled ? styles.scrolled : ""}`}>
      <Link
        href="/">
        <Image
          src={alpineLogo}
          alt="Alpine Sports Andermatt"
          width={120}
        />
      </Link>


      <button
        className={styles["menu-toggle"]}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>


      {/* Close button for slide-in menu (visible only when menu is open, shown inside slide-in panel on mobile) */}

      <ul className={`${styles["menu-list"]} ${open ? styles.active : ""}`}>
        <li className={styles["menu-item"]}>
          <button
            className={styles["menu-toggle-x "]}
            style={{
              position: "fixed",
              top: "1.2rem",
              right: open ? "1.5rem" : "-100px",
              zIndex: 1101,
              color: "#222",
              background: "lightgrey",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              // padding: "0.2rem",
              cursor: "pointer",
              border: "none",
              fontSize: "40px",
              display: open ? "block" : "none",
            }}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </li>


        <li className={styles["menu-item"]}>
          <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
        </li>

        {/* ABOUT */}
        <li className={`${styles["menu-item"]} ${styles["has-children"]}`}>
          <button
            className={styles["menu-link"]}
            onClick={() => toggleDropdown("about")}
          >
            ABOUT
            <span className={styles.arrow}>{openDropdown === "about" ? "−" : "+"}</span>
          </button>


          <ul
            className={`${styles["sub-menu"]} ${openDropdown === "about" ? styles.open : ""
              }`}
          >
            <li className={styles["sub-menu-item"]}>
              <Link href="/about" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
            <li className={styles["sub-menu-item"]}>
              <Link href="/about/team" onClick={() => setOpen(false)}>
                The Team
              </Link>
            </li>
            <li className={styles["sub-menu-item"]}>
              <Link href="/about/terms" onClick={() => setOpen(false)}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li>

        {/* SKI */}
        <li className={`${styles["menu-item"]} ${styles["has-children"]}`}>
          <button
            className={styles["menu-link"]}
            onClick={() => toggleDropdown("ski")}
          >
            SKI
            <span className={styles.arrow}>{openDropdown === "ski" ? "−" : "+"}</span>
          </button>

          <ul
            className={`${styles["sub-menu"]} ${openDropdown === "ski" ? styles.open : ""
              }`}
          >
            <li className={styles["sub-menu-item"]}>
              <Link href="/ski/private-lessons" onClick={() => setOpen(false)}>
                Private Lessons
              </Link>
            </li>
            <li className={styles["sub-menu-item"]}>
              <Link href="/ski/childrens-group" onClick={() => setOpen(false)}>
                Children’s Group
              </Link>
            </li>
            <li className={styles["sub-menu-item"]}>
              <Link href="/ski/off-piste" onClick={() => setOpen(false)}>
                Off Piste
              </Link>
            </li>
            <li className={styles["sub-menu-item"]}>
              <Link href="/ski" onClick={() => setOpen(false)}>
                About Ski Lessons
              </Link>
            </li>
          </ul>
        </li>

        <li className={styles["menu-item"]}>
          <Link href="/snowboard-lessons" onClick={() => setOpen(false)}>SNOWBOARD LESSONS</Link>
        </li>

        <li className={styles["menu-item"]}>
          <Link href="/cross-country" onClick={() => setOpen(false)}>CROSS COUNTRY</Link>
        </li>

        <li className={styles["menu-item"]}>
          <Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link>
        </li>

        <li className={`${styles["menu-item"]} ${styles.cta}`}>
          <Link href="/book-now" onClick={() => setOpen(false)}>Book now</Link>
        </li>
      </ul>
    </nav>
  );
}
