import LandingHero from "#/components/landingHero";
import { submitPageView } from "#/lib/gaActions";
import "#/styles/global.scss"


export default function Home() {
    submitPageView("home")
    return (
        <div className={"w-full h-full flex flex-col"}>
            <LandingHero />
        </div>
    );
}
