/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import ImageCard from "../../components/ImageCard";

export default function Events({ events }) {

  return <main className='flex flex-col gap-4'>

    <section>
      <h2 className='text-4xl lg:text-5xl font-bold text-center pt-8 pb-10 logo'>
        Events in Different Cities
      </h2>

      <section className='flex flex-col gap-8'>
        {
          events.map((city, index) => <div key={city.id} className='grid grid-cols-12 dark:bg-black bg-gray-300 dark:bg-opacity-30 bg-opacity-30 rounded-lg p-2'>
            <ImageCard className={`${index%2!==0? 'order-2' : ''} col-span-12 sm:col-span-6 lg:col-span-4 relative rounded-lg h-72 overflow-hidden flex items-center`} id={city.id} image={city.image}/>
            <div className="col-span-12 sm:col-span-6 lg:col-span-8 px-4 py-2">
            <h3 className='text-center sm:text-left text-2xl font-bold mb-2'>{city.title}</h3>
              <p className='px-2'>{city.description}</p>
            </div>
          </div>)
        }

      </section>

    </section>

  </main>

}

export async function getStaticProps() {

  const { events_categories } = await import('../../data/data.json')

  return {
    props: {
      events: events_categories
    }
  }
}


