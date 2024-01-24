"use client"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'
import React from 'react'



interface ComingSoonToolTipProps {
    children: React.ReactNode
}

const ComingSoonToolTip = ({ children }: ComingSoonToolTipProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{'We\'re not live yet, but we will be soon!'}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


ComingSoonToolTip.displayName = "ComingSoonToolTip"


export default ComingSoonToolTip;
