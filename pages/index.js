import Head from 'next/head';
import Image from 'next/image';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';
import Portfolio from './components/portfolio';

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

          <section id="about" className="py-20">
            <About />
          </section>

          <section id="portfolio" className="py-30 bg-slate-200">
            <Portfolio />
          </section>
          {/* <section id="contact" className="py-20 w-ful h-screen bg-green-500">
            Contact
          </section> */}
        </main>
      </div>
    </>
  );
}
