import { Html, Head, Main, NextScript } from 'next/document'
import ThemeContextProvider from '../context/ThemeContext'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ThemeContextProvider>
        <body>
          <Main />
          <NextScript />
        </body>
      </ThemeContextProvider>

    </Html>
  )
}
