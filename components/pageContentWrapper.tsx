import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import Navbar from './nav/navbar'
import ModalsAndNotifications from './modalsAndNotifications'
import Footer from './nav/footer/footer'



interface PageContentWrapperProps {
    className?: string
    style?: HTMLProps<HTMLDivElement>["style"]
    children: React.ReactNode
}

const PageContentWrapper = ({ className, style, children }: PageContentWrapperProps) => {
    return (
        <div className={"w-full h-full flex flex-col justify-start items-center"}>
            <Navbar />
            <ModalsAndNotifications />
            <main
                className={clsx("px-6 md:px-8 w-full min-h-screenWithoutNav h-fit", className && className)}
                style={style ? style : {
                }}
            >{children}</main>
            <Footer />
        </div>
    )
}


PageContentWrapper.displayName = "PageContentWrapper"


export default PageContentWrapper;
