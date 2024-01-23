import LandingHero from "#/components/landingHero";
import "#/styles/global.scss"

export default function Home() {
    return (
        <div className={"w-full h-full flex flex-col"}>
            <LandingHero />
        </div>
    );
}
