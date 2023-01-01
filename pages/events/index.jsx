/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import CardsGrid from "../../components/CardsGrid";

export default function Events({ allEvents }) {

  return <main className='flex flex-col gap-4'>

    <section>
      <h2 className='text-4xl lg:text-5xl font-bold text-center pt-8 pb-10 logo'>
        All Events
      </h2>
      <CardsGrid itemsArray={allEvents} all/>
    </section>

  </main>

}

export async function getStaticProps() {

  const { allEvents } = await import('../../data/data.json')

  return {
    props: {
      allEvents: allEvents.sort(() => (Math.random() > .5) ? 1 : -1)
    }
  }
}


