import clsx from 'clsx'
import React from 'react'



interface H2Props {
    children: string
    style?: React.CSSProperties
    className?: string
}

const H2 = (props: H2Props) => {
    return (
        <h2
            className={clsx("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", props.className && props.className)}
            style={props.style || {}}
        >{props.children}</h2>
    )
}


H2.displayName = "H2"


export default H2;
