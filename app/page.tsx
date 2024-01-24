import LandingHero from "#/components/landingHero";
import "#/styles/global.scss"
import ReactGA from "react-ga4";

export default function Home() {

    ReactGA.initialize([
        {
            trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!,
            gaOptions: {
                page: "/"
            }
            /* gtagOptions: {...}, // optional */
        },
    ]);


    return (
        <div className={"w-full h-full flex flex-col"}>
            <LandingHero />
        </div>
    );
}
