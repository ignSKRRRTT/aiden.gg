import Head from "next/head";
import { useInView } from 'react-intersection-observer';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>Aiden.gg</title>
        <meta name="description" content="Aiden's (aka SKRRRTT) personal site" />
        <meta property="og:image" content="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png" />
        <meta property='theme-color' content='#17171a' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden px-6">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className='z-[-5]'
        />
        <Hero inView={inView} descRef={ref} />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
