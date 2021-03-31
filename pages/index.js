import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js and Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Testing Next.js with Netlify" />
        <p className="description">
          Commit, push and make sure this branch deploy builds correctly.
          Setup branch subdomain
        </p>
      </main>

      <Footer />
    </div>
  )
}
