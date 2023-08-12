import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'
import { Footer, Navbar } from './components'
import { StateContext } from './context/StateContext'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Brokbaits',
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
          <main className='main-container min-h-[600px]'>
            <Toaster/>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </StateContext>
      </body>
    </html>
  )
}
