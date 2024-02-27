import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'
import { Footer, Navbar } from './components'
import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Baikbaits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Head>
          <title>{metadata}</title>
        </Head>
        <StateContext>
          <header>
            <Navbar />
          </header>
          <main className='w-full m-auto max-w-[1400px] flex lg:h-screen justify-center'>
            <Toaster />
            {children}
          </main>
        </StateContext>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
