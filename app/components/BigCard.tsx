import styles from './BigCard.module.css'


export interface BigCardProps{
    text: string;
}

export default function BigCard({text}: BigCardProps){
    return(
        <section className={styles.aboutText}>
        {/* <h3>Why Alpine Sports Andermatt</h3> */}

        <p>
          {/* Alpine Sports Andermatt is a premium ski school dedicated to delivering a
          simple, enjoyable, and expertly guided ski experience. With a professional
          yet friendly approach, we specialize in private lessons and children’s group
          lessons designed to maximize progress and confidence.
          Our experienced team knows Andermatt inside out and is committed to making
          every ski day seamless, memorable, and perfectly tailored to you. */}
          {text}
        </p>
      </section>
    )
}