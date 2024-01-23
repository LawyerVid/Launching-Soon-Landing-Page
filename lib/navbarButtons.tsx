import { Route } from "next"


export type AuthStatusType = "Authenticated-Lawyer" | "Unauthenticated" | "Admin"
export type AuthStatusValidationType = AuthStatusType | "Any" | "Validated-Any"

interface NBHref {
    label: string
    validate: AuthStatusValidationType
    href: Route,
    clicky?: () => void
}


export type NavClickOpt = "logout"

interface NBClick {
    label: string
    validate: AuthStatusValidationType
    clicky: NavClickOpt
    href?: undefined
}


export type NavbarButtonType = NBHref | NBClick


export const navbarButtons: NavbarButtonType[] = [
    {
        label: "Lawyers",
        validate: "Any",
        href: "/attorneys"
    },
    {
        label: "About",
        validate: "Any",
        href: "/aboutUs"
    },
    {
        label: "Contact Us",
        validate: "Any",
        href: "/contactUs"
    },
    {
        label: "Sign Up",
        validate: "Unauthenticated",
        href: "/auth/signin"
    },
    {
        label: "My Profile",
        validate: "Authenticated-Lawyer",
        href: "/profile"
    },
    {
        label: "Log Out",
        validate: "Validated-Any",
        clicky: "logout"
    },
]
