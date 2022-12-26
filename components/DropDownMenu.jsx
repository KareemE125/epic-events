import { Dropdown } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useMemo } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { ThemeContext } from '../context/ThemeContext';

export default function DropDownMenu() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const router = useRouter();
    const activeClass = useMemo(() => 'px-4 py-2 hover:bg-[#f3f4f6] dark:hover:bg-[#5b21b6] font-bold flex justify-center text-xl dark:text-violet-500 transition-all duration-300', []);
    const inActiveClass = useMemo(() => 'px-4 py-2 flex justify-center hover:bg-[#f3f4f6] dark:hover:bg-[#5b21b6]', []);



    return <Dropdown style={{ background: theme === 'dark' ? '#5b21b6' : 'black' }} label="Menu">
        <Link className={router.asPath === '/' ? activeClass : inActiveClass} href='/'>
            <Dropdown.Item className='px-0 pt-0 pb-0 dark:hover:bg-[#5b21b6]'>Home</Dropdown.Item>
        </Link>
        <Link className={router.asPath === '/events' ? activeClass : inActiveClass} href='/events'>
            <Dropdown.Item className='px-0 pt-0 pb-0 dark:hover:bg-[#5b21b6]'>Events</Dropdown.Item>
        </Link >
        <Link className={router.asPath === '/tops' ? activeClass : inActiveClass} href='/tops'>
            <Dropdown.Item className='px-0 pt-0 pb-0 dark:hover:bg-[#5b21b6]'>Tops</Dropdown.Item>
        </Link>
        <Link className={router.asPath === '/about-us' ? activeClass : inActiveClass} href='/about-us'>
            <Dropdown.Item className='px-0 pt-0 pb-0 dark:hover:bg-[#5b21b6]'>About Us</Dropdown.Item>
        </Link>
        <hr />
        <Dropdown.Item className='px-0 pt-0 pb-0 '>
            <button className='text-3xl w-full px-4 py-2 flex justify-center text-yellow-400 dark:text-violet-500' onClick={toggleTheme}>
                {
                    theme === 'dark' ? <MdDarkMode /> : <MdLightMode />
                }
            </button>
        </Dropdown.Item>
    </Dropdown>
}
