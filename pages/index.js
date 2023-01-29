import Head from 'next/head';
import Image from 'next/image';
import Header from './components/header';
import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>LeonardSianipar</title>
        <meta name="description" content="Resume Leonard Sianipar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-full h-[1400px]">
        <Header />
        <main className="absolute top-0 ">
          <section id="home" className="pt-20">
            <Hero />
          </section>

          <section id="about" className="py-80 w-full bg-red-500">
            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
          </section>

          <section id="portfolio" className="py-2 h-screen0 w-full bg-yellow-500">
            Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
            Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
            Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
            Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
            Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
            Portfolio Portfolio
          </section>
          <section id="contact" className="py-20 w-ful h-screen bg-green-500">
            Contact
          </section>
        </main>
      </div>
    </>
  );
}
