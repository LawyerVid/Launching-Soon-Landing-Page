import axios from 'axios'

export const htmlEm = () => {
    return document.querySelector("html")
}

export const toggleDarkmode = async () => {
    if (typeof window === "undefined") return;
    let em = htmlEm()
    let willBeDark = !em?.classList.contains("dark")
    if (!em) return
    em.classList.toggle("dark")
    await axios.post("/api/util/setDarkMode", { darkMode: willBeDark })
}

