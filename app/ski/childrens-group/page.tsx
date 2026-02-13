import HeroJustText from "@/app/components/HeroJustText";
import styles from "./Childrens.module.css";


export default function ChildrensGroup() {
    return (
        <>
            <HeroJustText
                text="Children’s Group Lessons"
            />


            <section className={styles.pricing}>

                <div className={styles.cards}>

                    {/* Private Lesson */}
                    <div className={styles.card}>
                        <h2>5-Days Package</h2>
                        <p className={styles.price}>CHF 990</p>
                        <ul className={styles.list}>
                            <li>Monday - Friday</li>
                            <li>Daily 9:30 - 15:30</li>
                            <li>Age of 6 - 10</li>
                            <li>Max. 6 children per group</li>
                            <li>Lunch Included</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    {/* Small Group */}
                    <div className={styles.card}>
                        <h2>Full Day (4+ guests)</h2>
                        <p className={styles.price}>CHF 570 / CHF 650</p>
                        <ul className={styles.list}>
                            <li>Low season / High season</li>
                            <li>5 Hours</li>
                            <li>9:30 - 15:30</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>Half Day (1-3 guests)</h2>
                        <p className={styles.price}>CHF 350 / CHF 390</p>
                        <ul className={styles.list}>
                            <li>Low season / High season</li>
                            <li>3 Hours</li>
                            <li>9:00 - 12:00</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>Half Day (4+ guests)</h2>
                        <p className={styles.price}>CHF 390 / CHF 440</p>
                        <ul className={styles.list}>
                            <li>Low season / High season</li>
                            <li>3 Hours</li>
                            <li>9:00 - 12:00</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                    <div className={styles.card}>
                        <h2>Quick Tips</h2>
                        <p className={styles.price}>CHF 260</p>
                        <ul className={styles.list}>
                            <li>Low season</li>
                            <li>2 Hours</li>
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