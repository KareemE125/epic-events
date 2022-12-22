/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import NavBar from '../components/NavBar';
import { ThemeContext } from '../context/ThemeContext'

const cityList = [
  {
    name: 'Cairo',
    imageUrl: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTo5rlpkY7EXKTD0P8_odgyKaX3aAJFCyEjwaExeuXqSGLQvun7KlcMHZCUWnzcYpu2'
  },
  {
    name: 'London',
    imageUrl: 'https://www.colliers.com/-/media/images/colliers/emea/uk/research/research-heros/service-lines/london-offices/london-city-occupier-insights-hero.ashx?bid=39bc0b1f6eda4ce285cc7b4d24196216&w=747&hash=44734B02C492844B73E437E24B83798B'
  },
  {
    name: 'Amsterdam',
    imageUrl: 'https://singularityhub.com/wp-content/uploads/2018/04/amsterdam-netherlands-city-guide_128463995-900x506.jpg'
  },
];

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return <main className='flex flex-col gap-4'>

    <section>
      <h1>Events Home</h1>

    </section>

  </main>

}
