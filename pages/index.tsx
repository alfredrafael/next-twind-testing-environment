import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Slider from 'react-slick'

const Home: NextPage = () => {
  {
    /* The following "settings" come from this example: 
     https://react-slick.neostack.com/docs/get-started/

     Need the links/scripts on "_document.tsx" to work
    */
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // modified setting to achieve the "show 1/3 of next card" effect
    slidesToScroll: 1,
  }

  const dataArray = ['1', '2', '3'] // mock-data array

  //Function to generate cards
  const generateCards = dataArray.map((item, i) => {
    return (
      <div className="px-10 align-middle">
        <div className="flex h-[100px] w-[100%] justify-center border bg-red-100">
          {item}
        </div>
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>React Slider Test</title>
      </Head>
      {/* Hardcoded */}
      <section className="min-h-screen px-10 py-10">
        <div>
          <h2 className="font-semibold	">
            Potential implementation of carousel
          </h2>
          <br />
          <Slider {...settings}>
            <div className="px-10 align-middle">
              <div className="flex h-[100px] w-[100%] justify-center border bg-red-100">
                1
              </div>
            </div>
            <div className="px-10 align-middle">
              <div className="flex h-[100px] w-[100%] justify-center border bg-blue-100">
                2
              </div>
            </div>
            <div className="px-10 align-middle">
              <div className="flex h-[100px] w-[100%] justify-center border bg-black text-white">
                3
              </div>
            </div>
          </Slider>

          <br />
          <br />
          <br />

          <section>
            <h2 className="font-semibold	">
              Populated via array.<code>map</code>
            </h2>
            <br />
            <Slider {...settings}>{generateCards}</Slider>
          </section>
        </div>
      </section>{' '}
      {/* 
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold first-letter:text-[#040182]">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
              pages/index.tsx
            </code>
          </p>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
       */}
    </>
  )
}

export default Home
