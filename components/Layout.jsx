import Head from 'next/head';
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Layout(props) {
    const { theme } = useContext(ThemeContext);
    return <main className={theme}>
        <Head>
            <title>Epic Events</title>
            <meta name="description" content="Discover The upcoming Epic Events and miss them out 😉" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        {props.children}
    </main>
}
