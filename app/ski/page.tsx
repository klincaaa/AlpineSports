import BigCard from "../components/BigCard";
import HeroJustText from "../components/HeroJustText";

export default function Ski() {
    return (
        <>
            <HeroJustText
                text="SKI LESSONS"
            />
            <section className="mt-16">
                <BigCard
                    text="In the heart of the Swiss Alps, surrounded by the Alpine pass Gotthard, Furka and Oberalp, the SkiArena Andermatt-Sedrun offers a vast variety of skiing terrain for every ski level.
                        At Alpine Sports Andermatt, we love nothing more than to pass on our knowledge,
                        passion and experiences in a stress-free environment. It is a concept that has 
                        proved to be really popular and we are sure you will enjoy it too. From beginners’ 
                        lessons to kids’ lessons to off-piste, we offer everything,
                        including guiding services to help you get to know the terrain with one of our seasoned experts."
                />
            </section>
        </>

    )
}