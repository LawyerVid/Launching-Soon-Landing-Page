export type PageNames = "home"
import { Route } from "next";
import ReactGA from "react-ga4";

export const pageMap: { [k in PageNames]: Route } = {
    home: "/",
}


export const submitPageView = (page: PageNames) => {
    ReactGA.send({
        hitType: "pageView",
        page: pageMap[page],
        title: `${page} page view`
    })
}
