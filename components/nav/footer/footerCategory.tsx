import { QuickLinkType } from '#/types/general'
import React from 'react'



interface FooterCategoryProps {
    items?: QuickLinkType[]
    title: string
}

const FooterLinkItem = ({ item }: { item: QuickLinkType }) => {
    return (
        <a role="button" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline cursor-not-allowed">{item.label}</a>
    )
}


const FooterCategory = ({ items, title }: FooterCategoryProps) => {
    return (
        <div className={"w-full flex flex-col justify-center items-center md:inline-block md:w-fit"}>
            <h3 className="text-gray-700 uppercase dark:text-white w-full text-center md:w-fit">{title}</h3>
            {items && items.map((item, i) => <FooterLinkItem item={item} key={`quick-link-${item.category}-${i}`} />)}
        </div>
    )
}


FooterCategory.displayName = "FooterCategory"


export default FooterCategory;
