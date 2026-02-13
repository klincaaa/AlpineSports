import Image from 'next/image'
import TeamImg from '@/public/images/mainImage.webp'
import styles from './HeroJustText.module.css'

export interface HeroJustTextProps{
    text: string;
}

export default function HeroJustText({text} : HeroJustTextProps){
    return (
        <section className={styles.team}>
                <Image
                    src={TeamImg}
                    alt="Alpine Sports Andermatt"
                    fill
                    priority
                    className={styles.bgImage}
                />

                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h1>
                       {text}
                    </h1>
                </div>
            </section>
    )
}