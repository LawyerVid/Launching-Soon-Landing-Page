"use client"
import { NavbarButtonType } from '#/lib/navbarButtons';
import React from 'react'
import ComingSoonToolTip from '../comingSoonToolTip';


const NavButton = ({ label }: NavbarButtonType) => {
    return <ComingSoonToolTip><a
        role="button"
        className={"transition-colors text-foreground/60 hover:text-foreground/80 hidden sm:inline-block cursor-not-allowed"}
    >
        {label}
    </a></ComingSoonToolTip>
}


NavButton.displayName = "NavButton"


export default NavButton;
