import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import data from './api/data.json'

const Home: NextPage = () => {
  console.log(data)
  //Function to generate cards
  const generateCards = data.map((item, i) => {
    return (
      <div className="align-middle" key={i}>
        <div className="mt-6 w-80 rounded-xl border p-6 text-left">
          <div className="mb-4">
            <strong>
              <i>Title:</i>
            </strong>
            <span className="my-3">&nbsp;{item.title}</span>
          </div>
          <hr />
          <div className="flex">
            {/* Col 1 //////////////// */}
            <div className="mb-6 flex-1">
              <h1 className="mt-4 font-bold">
                <i>Ticket:</i>
              </h1>
              <a href="https://magentatech.atlassian.net/browse/TRB-1619">
                <p className="font-bold text-blue-500">{item.ticket}</p>
              </a>
              <br />
              <h1 className="m-0 font-bold">
                <i>Picture:</i>
              </h1>
              <a href={item.picture}>
                <p className="font-bold text-blue-500">Picture Link</p>
              </a>{' '}
            </div>

            {/* Col 2 //////////////// */}

            <div className="flex-1 text-right">
              <h1 className="mt-4 font-bold">
                <i>Page:</i>
              </h1>
              <a href={item.pageLink}>
                <p className="font-bold text-blue-500">{item.page}</p>
              </a>
              <br />
              <h1 className="m-0 font-bold">
                <i>Figma:</i>
              </h1>
              <a href={item.figma}>
                <p className="font-bold text-blue-500">Design Link</p>
              </a>
            </div>
          </div>
          {/* Comment /////////// */}
          <hr />
          <strong>
            <p className="my-4">Comment:</p>
          </strong>
          {item.comment}
        </div>
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>My Testing Environment</title>
      </Head>
      <div className="flex min-h-screen flex-col justify-center py-1">
        <div>
          <h1 className="px-20 py-8 text-4xl font-bold">Notes on Bug Fixes</h1>
        </div>
        <main className="flex w-full flex-1 justify-center px-20">
          <div className="max-w-8xl flex flex-wrap justify-between gap-2 sm:w-full">
            {/* //////////////////////////////////////////////////////////////////////// */}
            {generateCards}
            {/* Card end */}
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
    </>
  )
}

export default Home

{
  /* 
const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // modified to achieve the "showing 1/3 of next card" effect
    slidesToScroll: 1,
  };

*/
}

{
  /* The following "settings" come from this example: 
   https://react-slick.neostack.com/docs/get-started/

   We also need the css links on "_document.tsx" to work
  */
}

{
  /* 
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
*/
}
