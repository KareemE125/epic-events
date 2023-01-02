/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function EventDetails({ event }) {

  //Capitalize the first letter
  const cityName = event.city.split('-').map(l => l[0].toUpperCase() + l.substr(1)).join(' ');

  function propertyLabel(label, property = '') {
    return <tr>
      <td className='font-bold text-lg'>
        {label}
      </td>
      {
        property && <td>
          <div className="bg-black ml-4 dark:bg-violet-800  text-white w-fit px-2 py-1 rounded-lg dark:text-white mr-2">
            {property}
          </div>
        </td>
      }
    </tr>
  }

  return <main>
    <div className='lg:px-14 xl:px-28 pb-10 pt-0 md:pt-6 grid grid-cols-12 md:gap-8'>

      <section className='col-span-12 mb-6 px-[5%] xs:px-[20%] md:col-span-5 md:px-0'>
        <div className='bg-black rounded-lg p-2'>
          <img className='rounded-lg w-full' src={event.image} alt="image" />
        </div>
      </section>

      <section className='col-span-12 md:col-span-7'>
        <h2 className='text-4xl logo py-2 mb-4'>{event.title}</h2>

        <table class="table-fixed border-separate border-spacing-y-4">
          <tbody>
            {propertyLabel('ID', event.id)}
            {propertyLabel('Title', event.title)}
            {propertyLabel('Location', cityName)}
          </tbody>
        </table>

        <h4 className='font-bold text-lg mt-1 mb-2'>Description</h4>
        <p className='border-2 border-black dark:border-white rounded-lg p-2'>{event.description}</p>

      </section>

    </div>
  </main>
}

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');

  const paths = allEvents.map(event => {
    return { params: { city: event.city, id: event.id } }
  })

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('../../../data/data.json');

  const id = context.params.id;
  const event = allEvents.find(event => event.id === id)

  return {
    props: {
      event
    },
    revalidate: 3600,
  }
}