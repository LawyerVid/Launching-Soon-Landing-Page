"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonProps } from './ui/button';
import ComingSoonToolTip from './comingSoonToolTip';



interface DisabledButtonProps extends Omit<ButtonProps, "disabled"> {
    label: string
}

const DisabledButton = ({ label, ...props }: DisabledButtonProps) => {
    const [hovered, setHovered] = useState(false)
    const [_rect, _setRect] = useState<DOMRect | null>(null)
    const rect = useRef<DOMRect | null>(_rect)
    const id = label.replaceAll(" ", "").toLowerCase()

    const setRect = (r: DOMRect) => {
        _setRect(r)
        rect.current = r
    }

    const handleRect = () => {
        let em = document.getElementById(id)
        if (!em) return
        em.style.cursor = "not-allowed"
        em.style.transition = "all 0.2s ease-in"
        let newRect = em?.getBoundingClientRect()
        if (newRect) {
            setRect(newRect)
        }
    }

    useEffect(() => {
        handleRect()
        window.addEventListener("resize", handleRect)
        return () => window.removeEventListener("resize", handleRect)
    }, [])

    const isHovered = (btn: DOMRect, e: MouseEvent): boolean => {
        let dims = [
            e.x >= btn.x, // left
            e.x <= btn.x + btn.width, // right
            e.y >= btn.y, // top
            e.y <= btn.y + btn.height // bottom
        ]
        return dims.every((a) => a)
    }


    const handleMouseMove = (e: MouseEvent) => {
        if (rect.current) {
            const hovering = isHovered(rect.current, e)
            setHovered(hovering)
        }
    }

    const removeListener = () => {
        document.removeEventListener("mousemove", handleMouseMove)
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove)
        return removeListener
    }, [])

    return (
        <ComingSoonToolTip>
            <Button
                {...props}
                id={id}
                className={"cursor-not-allowed w-full"}
                disabled={hovered}
            >{label}</Button>
        </ComingSoonToolTip>
    )
}


DisabledButton.displayName = "DisabledButton"


export default DisabledButton;
