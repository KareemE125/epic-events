/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const cityList = [
  {
      "id": "london",
      "title": "Events in London",
      "description": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem",
      "image": "https://i.pinimg.com/564x/47/71/5a/47715a1942522e308b3cfc397709d7eb.jpg"
  },
  {
      "id": "san-francisco",
      "title": "Events in San Francisco",
      "description": "corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.",
      "image": "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
      "id": "barcelona",
      "title": "Events in Barcelona",
      "description": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscisfa.",
      "image": "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
  }
];

export default function events() 
{
  return <main className='flex flex-col gap-4'>

  <section>
    <h2 className='text-4xl lg:text-5xl font-bold text-center pt-8 pb-10 logo'>
      Events in Different Cities
    </h2>

    <section className='grid grid-cols-12 gap-4'>
      {
        cityList.map((city, index) => <div key={index} className='col-span-12 lg:col-span-4 xs:flex lg:block gap-3'>
          <div className='lg:py-4 xs:w-2/4 lg:w-full h-72 mb-4 overflow-hidden flex items-center'>
            <img className='w-full' src={city.image} />
          </div>
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
