import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext('dark');

export default function ThemeContextProvider(props) {

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setTheme(storedTheme || 'dark');
        localStorage.setItem('theme', storedTheme || 'dark');
    }, [])


    function toggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
        else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
}
