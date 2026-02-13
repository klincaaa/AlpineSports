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
                
                <BigCard text='About us' />
            </section>
        </>
    )
}