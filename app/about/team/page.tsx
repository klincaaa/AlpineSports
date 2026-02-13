import BigCard from '@/app/components/BigCard'
import styles from './Team.module.css'
import HeroJustText from '@/app/components/HeroJustText'


export default function Team() {
    return (
        <>
            <HeroJustText
                text=' MEET THE TEAM OF ALPINE SPORTS'
            />
            <section className={styles.teamDes}>
                <BigCard
                    text='The Alpine Sports Andermatt Ski School is an international team of professional ski and snowboard instructors who love what they do. Our team originate from all corners of the globe, sharing a passion for teaching and are always eager to share their experiences. The instructors are all fluent in English and collectively we cover a multitude of languages such as Swiss German, German, Italian, French, Dutch, Danish, Swedish, Spanish, Czech and Russian.

The majority of the Alpine Sports team are year round professionals teaching in Australia, NZ or South America during our Summer months.  We really are seasoned experts with the knowledge and intuition to deliver the best customer experience – so much more than just a lesson!

We come with a great attitude and awesome personalities, get in contact to get to know us better.'
                />
            </section>

        </>

    )
}