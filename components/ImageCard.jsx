/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function ImageCard({className,image,id}) 
{
    return <div className={className}>
        <img src={image} />
        <Link href={`/events/${id}`}>
            <div className="absolute bottom-1 right-1 flex items-center gap-3 justify-end bg-white dark:bg-bg-main-dark px-2 py-1 rounded-lg bg-opacity-80  dark:text-violet-700 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white">
                Visit <FaExternalLinkSquareAlt />
            </div>
        </Link>
    </div>
}
