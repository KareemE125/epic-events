import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import ImageCard from './ImageCard'

export default function CardsGrid({ itemsArray, all = false }) {
  const router = useRouter();

  function adjustPath(item)
  {
    if( router.asPath === '/')
    {
      return router.asPath + `/events/${item.id}`;
    }
    else if( router.asPath === '/events')
    {
      return router.asPath + `/${item.city}/${item.id}`;
    }
    else if( router.asPath === '/tops')
    {
      return `/events/${item.city}/${item.id}`;
    }
    else
    {
      return router.asPath + `/${item.id}`;
    }
  }

  return <section className='grid grid-cols-12 gap-4'>
    {
      itemsArray.map((item) => <div key={item.id} className='col-span-12 lg:col-span-3 xs:flex lg:block gap-3 dark:bg-black bg-gray-300 dark:bg-opacity-30 bg-opacity-30 rounded-lg p-2 pb-4 relative'>
        <ImageCard id={item.id} image={item.image} all={all} city={item.city} />
        <div className='xs:w-2/4 lg:w-full mt-5'>
          <h3 className='lg:text-center xs:text-left text-center text-2xl font-bold mb-2'>{item.title}</h3>
          <p className='px-2 mb-10'> {item.description} </p>
          {
            item.id !== 'cairo' ?
              <Link href={adjustPath(item)}>
                <div className="absolute bottom-2 right-2 flex items-center gap-3 justify-end bg-white dark:bg-bg-main-dark px-2 py-1 rounded-lg bg-opacity-80  dark:text-violet-700 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white">
                  Visit <FaExternalLinkSquareAlt />
                </div>
              </Link>
              : <div className="absolute bottom-2 right-2 bg-white dark:bg-bg-main-dark px-2 py-1 rounded-lg bg-opacity-80 dark:text-violet-700">
                No Events Right Now
              </div>
          }
        </div>
      </div>)
    }
  </section>
}
