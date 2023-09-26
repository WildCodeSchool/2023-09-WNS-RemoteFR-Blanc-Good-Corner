import Head from 'next/head'
import React from 'react'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>The good corner</title>
        <meta name="description" content="The good corner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
    </>
  )
}

export default Layout