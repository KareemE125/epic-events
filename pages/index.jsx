import React from "react";
import CardsGrid from "../components/CardsGrid";

export default function Home({ events }) {

  return <main className='flex flex-col gap-4'>

    <section>
      <h2 className='text-4xl lg:text-5xl text-center pt-8 pb-10 logo'>
        Events in Different Cities
      </h2>
      <CardsGrid itemsArray={events} />
    </section>

  </main>

}

export async function getStaticProps() {

  const { events_categories } = await import('../data/data.json')

  return {
    props: {
      events: events_categories
    }
  }
}