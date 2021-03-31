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
        </p>
        <p>
          Setup branch subdomain
        </p>
        <p>
          redirects
        </p>
        <p>
          404 page
        </p>
      </main>

      <Footer />
    </div>
  )
}