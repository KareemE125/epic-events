import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function City() {
    const router = useRouter();
    let city = router.query.city;
    city = city.charAt(0).toUpperCase() + city.slice(1);

    return <>
        <Head>
            <title>{city} Events</title>
            <meta name="description" content="Discover The upcoming Epic Events and miss them out 😉" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main>
            <h2 className='text-4xl'>
                Events in {city}
            </h2>
            <Link href='/'>Event 1</Link>
            <Link href='/'>Event 2</Link>
            <Link href='/'>Event 3</Link>
        </main>
    </>
}
