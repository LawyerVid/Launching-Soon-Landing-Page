import { Route } from "next"

export interface QuickLinkType {
    label: string
    category: "legal" | "navigation" | "user"
    href: Route | string
}
