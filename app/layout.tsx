import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '#/styles/shad.scss'
import '#/styles/global.scss'
import clsx from 'clsx'
import { cookies } from 'next/headers'
import PageContentWrapper from '#/components/pageContentWrapper'
import { Toaster } from '#/components/ui/toaster'
import config from "#/lib/appConfig.json"
import Script from 'next/script'


const inter = Inter({
    subsets: ['latin'],
    display: "swap",
    variable: '--font-inter',
})

export const metadata: Metadata = {
    ...config.seo
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
            <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}`} />
            <Script id="ga-init-script">
                {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}');`}
            </Script>
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
