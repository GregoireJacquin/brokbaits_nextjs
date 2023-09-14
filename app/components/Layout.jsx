import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'


const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Brokbaits</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='max-w-[1400px] m-auto w-full flex sm:h-0'>
        EMPTY
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout