import BigCard from '../components/BigCard'
import HeroJustText from '../components/HeroJustText'
import styles from './About.module.css'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About Alpine Sports Andermatt – Ski Lessons in Switzerland</title>
                <meta
                    name="description"
                    content="Learn about Alpine Sports Andermatt Ski School. Private lessons, children's groups, off-piste guiding, and premium ski experiences in Andermatt."
                />
                <meta name="robots" content="index, follow" />
            </Head>
            <HeroJustText 
                text='ABOUT OUR SKI SCHOOL'
                />
            <section className={styles.about}>
                
                <BigCard text='The premier ski school Alpine Sports Andermatt has experienced and certified ski instructors with qualifications across many countries. This allows us to teach the best styles available internationally. Our instructors combine their passion for teaching with patience, fun and a wealth of experience.

We are proud to provide personalized service, individually tailored to your needs and skills. We love what we do and can’t wait to offer you a memorable and exhilarating experience.' />
            </section>
        </>
    )
}