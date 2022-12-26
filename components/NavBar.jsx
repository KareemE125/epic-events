/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useRouter } from 'next/router';
import Link from 'next/link'
import DropDownMenu from './DropDownMenu';

export default function NavBar() 
{
    const { theme, toggleTheme } = useContext(ThemeContext);
    const router = useRouter();

    const [width, setWidth] = useState(null);
    const widthListener = useCallback(() => setWidth(window.innerWidth), [],)

    const activeClass = useMemo(() => 'font-bold text-xl dark:text-violet-800 transition-all duration-300', []);
    const inActiveClass = useMemo(() => 'hover:font-bold hover:text-xl transition-all duration-300', []);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', widthListener)
        return (() => {
            window.removeEventListener('resize', widthListener);
        })
    }, [])


    return <nav className='dark:bg-black bg-white dark:text-white shadow-md px-8 py-4  fixed top-0 left-0 right-0 z-50 flex items-center justify-between'>
        <Link href='/'>
            <h1 className='text-3xl font-bold logo'>Epic Events</h1>
        </Link>

        {
            width <= 700 ? <DropDownMenu />
            : <ul className='flex text-lg font-medium gap-x-4'>
                <li>
                    <Link className={router.asPath === '/' ? activeClass : inActiveClass} href='/'>Home</Link>
                </li>
                <li>
                    <Link className={router.asPath.includes('/events') ? activeClass : inActiveClass} href='/events'>Events</Link>
                </li>
                <li>
                    <Link className={router.asPath === '/tops' ? activeClass : inActiveClass} href='/tops'>Tops</Link>
                </li>
                <li>
                    <Link className={router.asPath === '/about-us' ? activeClass : inActiveClass} href='/about-us'>About Us</Link>
                </li>
                <li className='flex items-center pl-4'>
                    <button className='text-3xl text-yellow-400 dark:text-violet-800' onClick={toggleTheme}>
                        {
                            theme === 'dark' ? <MdDarkMode /> : <MdLightMode />
                        }
                    </button>
                </li>
            </ul>
        }

    </nav>

}
