import React from 'react'
import H2 from '../typography/h2';
import { AuthManager } from '#/lib/authManager';
import { navbarButtons } from '#/lib/navbarButtons';
import DarkModeBtnIcon from '../darkModeButton';
import NavButton from './navBtn';
import Link from 'next/link';


const Navbar = async () => {
    let authManager = new AuthManager(null)
    return (
        <div className={"px-6 py-4 flex flex-row justify-between items-center gap-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}>
            <Link href="/">
                <H2
                    className={"!border-none"}
                    style={{
                        border: "none !important"
                    }}>LawyerVid</H2>
            </Link>
            <div className={"flex flex-row justify-center items-center gap-3"}>
                {navbarButtons.filter((btn) => authManager.validateAuthStatus(btn.validate)).map((b, i) => {
                    return <NavButton
                        {...b}
                        key={`nav-btn-${i}`}
                    />
                })}
                <DarkModeBtnIcon
                    className={"transition-colors text-foreground/60 hover:text-foreground/80"}
                />
            </div>
        </div>
    )
}


Navbar.displayName = "Navbar"


export default Navbar;
