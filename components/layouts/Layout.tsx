import React from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element;
  title: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout = ({children, title}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Eduardo Torres'/>
        <meta name='description' content='Información sobre el pokemon: xxxx'/>
        <meta name='keywords' content='xxxx, pokemon, pokedex'/>

        <meta property="og:title" content={`Información sobre: ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}

Layout.defaultProps = {
  title: 'PokemonApp'
}