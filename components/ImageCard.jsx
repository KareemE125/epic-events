/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

export default function ImageCard({ image, all = false, city }) {
    const router = useRouter();

    return <div className='relative rounded-lg lg:py-4 xs:w-2/4 lg:w-full h-72 mb-4 overflow-hidden flex items-center bg-black'>
        <img src={image} className='rounded-lg' />
        {
            all && <div className='absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-lg min-w-[100px] text-center bg-pink-600 text-white dark:bg-bg-main-dark px-2 py-1 dark:text-violet-700 dark:bg-opacity-90 bg-opacity-90'>
                {city.toUpperCase()}
            </div>
        }
    </div>
}
