import HeroJustText from "@/app/components/HeroJustText";
import styles from "./OffPiste.module.css";


export default function PrivateLessons() {
    return (
        <>
            <HeroJustText
                text="OFF PISTE LESSONS"
            />


            <section className={styles.pricing}>

                <div className={styles.cards}>

                    {/* Private Lesson */}
                    <div className={styles.card}>
                        <h2>Off Piste</h2>
                        <p className={styles.price}>CHF 750</p>
                        <ul className={styles.list}>
                            <li>5 Hours</li>
                            <li>9:00 - 15:00</li>
                            <li>Safety equipment not incl.</li>
                        </ul>
                        <a href="/book-now" className={styles.button}>Book now</a>
                    </div>

                </div>

                <footer className={styles.note}>
                    <p>* Prices are subject to change. For full terms, please contact us.</p>
                </footer>

            </section>

        </>
    )
}