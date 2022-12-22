import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import ThemeContextProvider from '../context/ThemeContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return <ThemeContextProvider>
    <Layout>
      <NavBar />
      <section className='min-h-screen bg-white dark:bg-bg-main-dark dark:text-white p-6 pt-20'>
        <Component {...pageProps} />
      </section>
    </Layout>
  </ThemeContextProvider>
}
