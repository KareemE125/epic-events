/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import CardsGrid from "../components/CardsGrid";

export default function tops({ allEvents }) {

  return <main className='flex flex-col gap-4'>

    <section>
      <h2 className='text-4xl lg:text-5xl font-bold text-center pt-8 pb-10 logo'>
        Top <span className='text-6xl logo px-3'> 5 </span> Events
      </h2>
      <CardsGrid itemsArray={allEvents} all/>
    </section>

  </main>

}

export async function getStaticProps() {

  let { allEvents } = await import('../data/data.json')

  allEvents = allEvents.filter(e => e.top === true)

  return {
    props: {
      allEvents: allEvents
    }
  }
}


