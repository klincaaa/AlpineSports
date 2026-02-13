import styles from "./Home.module.css"
import ProductCard from "./components/ProductCard";
import skiSchoolImg from "@/public/images/alpine-sports-zermatt-hero-image.avif"
import lessonsImg from "@/public/images/lessonsImg.jpg"
import offPiste from "@/public/images/offPiste.jpg"
import snowboardImg from "@/public/images/snowboardImg.jpg"
import ClientsSection from "./components/ClientsSection";
import Image from "next/image";
import heroImage from "@/public/images/mainImage.webp";
import BigCard from "./components/BigCard";
import Head from "next/head";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <Head>
        <title>Alpine Sports Andermatt | Ski School & Private Ski Lessons </title>
        <meta name="description" content="Alpine Sports Andermatt is a premium ski school dedicated to delivering a
          simple, enjoyable, and expertly guided ski experience. With a professional
          yet friendly approach, we specialize in private lessons and children’s group
          lessons designed to maximize progress and confidence." />
      </Head>

      <div className={styles.home}>
        {/* Background image */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgImage}
          // style={{ objectFit: "cover", width: "100%", height: "100%" }}
        >
          <source src="/videos/alpine-sports-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            Ski with <br />
            Alpine Sports
          </h1>
          <p>Explore Andermatt mountains with us!</p>
          <Link href="/book-now" className={styles.bookNow}>
            Book now
          </Link>
        </div>
      </div>

      <section className={styles.about}>
        <h2>EXPLORE OUR
          PRODUCTS</h2>

        <div className={styles.grid}>
          <ProductCard
            image={skiSchoolImg}
            label="Ski School"
            href="/ski"
          />
          <ProductCard
            image={lessonsImg}
            label="Ski Lessons"
            href="/ski/private-lessons"
          />
          <ProductCard
            image={offPiste}
            label="Off Piste"
            href="/ski/off-piste"
          />
          <ProductCard
            image={snowboardImg}
            label="Snowboard"
            href="/snowboard-lessons"
          />
        </div>
      </section>

      <BigCard
        text="Alpine Sports Andermatt is a premium ski school dedicated to delivering a
          simple, enjoyable, and expertly guided ski experience. With a professional
          yet friendly approach, we specialize in private lessons and children’s group
          lessons designed to maximize progress and confidence.
          Our experienced team knows Andermatt inside out and is committed to making
          every ski day seamless, memorable, and perfectly tailored to you."
      />

      <section className={styles.cards}>
        <ProductCard
          image={skiSchoolImg}
          label="Book Now"
          href="/book-now"
        />

        <ProductCard
          image={skiSchoolImg}
          label="Contact Us"
          href="/contact"
        />
      </section>

      <section className={styles.clients}>
        <ClientsSection />
      </section>
    </>

  );
}
