import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '#/styles/shad.scss'
import '#/styles/global.scss'
import clsx from 'clsx'
import { cookies } from 'next/headers'
import PageContentWrapper from '#/components/pageContentWrapper'
import { Toaster } from '#/components/ui/toaster'

const inter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'Lawyer Vid',
    description: 'Some description here',
}

export default function RootLayout(props: {
    children: React.ReactNode
    modal: React.ReactNode
}) {
    const cookieJar = cookies()
    const darkMode = cookieJar.get("darkMode")?.value !== "false"
    return (
        <html
            lang="en"
            className={clsx("group/html overscroll-y-none", darkMode && "dark")}
        >
            <body className={clsx("min-h-screen bg-background font-sans antialiased", inter.variable)}>
                <PageContentWrapper>
                    {props.children}
                </PageContentWrapper>
                <Toaster />
                {props.modal}
            </body>
        </html>
    )
}
