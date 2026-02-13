import HeroJustText from "@/app/components/HeroJustText";
import styles from "./CrossCountry.module.css";


export default function CrossCountry() {
    return (
        <>
            <HeroJustText
                text="CROSS COUNTRY PRIVATE LESSONS"
            />


            <section className={styles.pricing}>

                <div className={styles.cards}>

                    {/* Private Lesson */}
                    <div className={styles.card}>
                        <h2>EASY</h2>
                        <p className={styles.price}>CHF 260</p>
                        <ul className={styles.list}>
                            <li>2 Hours</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>MODERATE</h2>
                        <p className={styles.price}>CHF 260</p>
                        <ul className={styles.list}>
                            <li>2 Hours</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>EASY</h2>
                        <p className={styles.price}>CHF 350</p>
                        <ul className={styles.list}>
                            <li>3 Hours</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>SPORTY</h2>
                        <p className={styles.price}>CHF 350</p>
                        <ul className={styles.list}>
                            <li>3 Hours</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                </div>

                <footer className={styles.note}>
                    <p>* High seasons: 20 Dec 2025 – 11 Jan 2026  |  7 Feb 2026 – 8 Mar 2026</p>
                    <p>* Prices are subject to change. For full terms, please contact us.</p>
                </footer>

            </section>

        </>
    )
}