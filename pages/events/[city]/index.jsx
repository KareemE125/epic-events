import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import CardsGrid from '../../../components/CardsGrid';

export default function City(props) {
    const router = useRouter();
    const { city } = props;
    const { events } = props;

    return <>
        <Head>
            <title>{city.title}</title>
            <meta name="description" content="Discover The upcoming Epic Events and miss them out 😉" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main>
            <h2 className='text-4xl  lg:text-5xl logo py-8 text-center'>{city.title}</h2>
            <CardsGrid itemsArray={events} />
        </main>
    </>
}

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json');

    const paths = events_categories.map(city => {
        return { params: { city: city.id } }
    })

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const data = await import('../../../data/data.json');

    const id = context.params.city;
    const city = data.events_categories.find(city => city.id === id)
    const events = data.allEvents.filter(event => event.city === id)

    return {
        props: {
            city,
            events
        },
        revalidate: 20,
    }
}