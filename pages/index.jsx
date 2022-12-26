
import Link from "next/link";
import React from "react";
import ImageCard from "../components/ImageCard";

export default function Home({ events }) {

  return <main className='flex flex-col gap-4'>

    <section>
      <h2 className='text-4xl lg:text-5xl font-bold text-center pt-8 pb-10 logo'>
        Events in Different Cities
      </h2>

      <section className='grid grid-cols-12 gap-4'>
        {
          events.map((city) => <div key={city.id}className='col-span-12 lg:col-span-4 xs:flex lg:block gap-3 dark:bg-black bg-gray-300 bg-opacity-30 rounded-lg p-2 pb-4'>
            <ImageCard className='relative rounded-lg lg:py-4 xs:w-2/4 lg:w-full h-72 mb-4 overflow-hidden flex items-center' id={city.id} image={city.image}/>

            <div className='xs:w-2/4 lg:w-full'>
              <h3 className='lg:text-center xs:text-left text-center text-2xl font-bold mb-2'>{city.title}</h3>
              <p className='px-2'>{city.description}</p>
            </div>
          </div>)
        }

      </section>

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