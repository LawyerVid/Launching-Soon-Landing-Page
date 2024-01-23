"use client"
import React from 'react'
import DynamicIcon from './dynamicIcon'
import clsx from 'clsx'
import { toggleDarkmode } from '#/lib/ui/actions'



interface DarkModeBtnIconProps {
    className?: string
    btnClassName?: string
}

const DarkModeBtnIcon = ({ className, btnClassName }: DarkModeBtnIconProps) => {
    return (
        <a
            role="button"
            className={clsx(btnClassName && btnClassName)}
            onClick={toggleDarkmode}
        >
            <DynamicIcon
                name="moon"
                className={clsx("hidden dark:inline-block", className && className)} />
            <DynamicIcon
                name="sun" className={clsx("inline-block dark:hidden", className && className)} />
        </a>
    )
}


DarkModeBtnIcon.displayName = "DarkModeBtnIcon"


export default DarkModeBtnIcon;
