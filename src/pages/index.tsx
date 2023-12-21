import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Navbar from '@/components/Navbar';
import Hero from '@/components/index/Hero';
import About from '@/components/index/About';
import Projects from '@/components/index/Projects';


export default function Index() {
  const [pageLoad, setPageLoad] = useState(false);
  const [titleColor, setTitleColor] = useState('text-white');

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    setPageLoad(true)
    setTimeout(() => {
      setTitleColor('text-blue-600')
    }, 600)
  }, [])

  const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
      <Navbar clickScroll={handleClickScroll} clickScroll2={handleClickScroll2} pageLoad={pageLoad} />
      <main className='relative h-screen'>
        <Hero pageLoad={pageLoad} titleColor={titleColor} />
        <About refID={ref} inView={inView} />
        <Projects />
      </main>
    </>
  )
}
