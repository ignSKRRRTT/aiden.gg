import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Techicon from '@/components/techicon';
import Projectcard from '@/components/projectcard';
import Socialicon from '@/components/socialicon';


export default function Home() {
  const [pageLoad, setPageLoad] = useState(false);
  const [descLoad, setDescLoad] = useState(false);
  const [imageLoad, setImageLoad] = useState(false);
  const [titleColor, setTitleColor] = useState('text-white');

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  useEffect(() => {
    setPageLoad(true)
    setTimeout(() => {
      setDescLoad(true)
    }, 300)
    setTimeout(() => {
      setImageLoad(true)
    }, 500)
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
      <header className='relative'>
        <nav className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} fixed flex w-full z-50 bg-slate-950/80 p-4 sm:px-24 px-4 justify-between items-center`}>
          <Link href='/'>
            <img draggable={false} className='h-12 w-12 rounded-full' alt="image" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png" />
          </Link>
          <ul className='flex flex-row gap-x-2'>
            <li>
              <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={handleClickScroll}>
                About Me
              </button>
            </li>
            <li>
              <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={handleClickScroll2}>
                Projects
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className='relative h-screen'>
        <svg className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,74.7C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <section className='flex max-w-5xl w-full mx-auto'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-y-1 px-8 w-full xl:py-0 lg:py-32 md:py-40 sm:py-48 min-[425px]:py-56 py-60'>
              <h1 className={`${pageLoad ? 'animate-fadeIn' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-kanit`}>
                Hey, I&apos;m
                <span className={`duration-1000 ${titleColor}`}> Aiden</span>
                <span className='text-gray-400 sm:text-base text-sm sm:pl-1 pl-0 italic sm:inline flex'> aka SKRRRTT</span>
              </h1>
              <p className={`${descLoad ? 'animate-fade-in-left' : 'opacity-0'} text-white font-semibold sm:text-2xl text-xl font-kanit`}>
                I&apos;m a 17 year old full-stack developer from New York.
              </p>
              <ul className='flex flex-row flex-wrap w-fit gap-2'>
                <Socialicon
                  href='https://youtube.com/@SKRRRTT'
                  svg={<svg className='m-auto mt-2.5 w-7 h-7 fill-[#FF0000]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>}
                  delay={0.3}
                />
                <Socialicon
                  href='https://discord.com/invite/ez'
                  svg={<svg className='m-auto mt-2.5 w-7 h-7 fill-[#5865F2]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>}
                  delay={0.4}
                />
                <Socialicon
                  href='https://github.com/ignSKRRRTT'
                  svg={<svg xmlns="http://www.w3.org/2000/svg" className='m-auto mt-2.5 w-7 h-7 fill-white' viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>}
                  delay={0.5}
                />
                <Socialicon
                  href='https://instagram.com/aidenhasthememes'
                  svg={<svg className='m-auto mt-2.5 w-7 h-7 fill-[#8a3ab9]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>}
                  delay={0.6}
                />
                <Socialicon
                  href='https://namemc.com/profile/SKRRRTT'
                  svg={<svg viewBox="-8 -8 16 16" className='m-auto mt-2.5 w-7 h-7 fill-black' shapeRendering="crispEdges" ><path d="M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"></path></svg>}
                  delay={0.7}
                />
              </ul>
            </div>
            <img draggable={false} className={`relative rounded-full lg:w-72 w-0 border-2 border-blue-700 h-fit xl:-translate-y-14 lg:translate-y-6 mr-8 -translate-y-0 lg:scale-100 scale-0 ${imageLoad ? 'animate-fadeIn' : 'opacity-0'}`} alt="image" src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png' />
          </div>
        </section>
        <svg id="about" className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,48C384,43,480,85,576,96C672,107,768,85,864,74.7C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section className='relative bg-slate-950 pb-8'>
          <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit text-center pb-8`}>
            A little about me.
          </h1>
          <div className='flex flex-col max-w-6xl w-full mx-auto '>
            <div className='bg-slate-900 self-center w-3/4 rounded-md overflow-hidden border-2 border-blue-700 hover:-translate-y-1 duration-300 p-4 mb-16'>
              <p ref={ref} className={`text-white text-md font-kanit`}>
                {inView && (
                  <Typewriter
                    options={{
                      delay: 30,
                      strings: ["My name is Aiden, I'm 17 years old and I currently live in New York. I have been interested in web development since 15 years old but never really attempted to make anything until I was 16 almost 17 years old. I have graduated from highschool a year and a half early, and plan to use my time before I go to college to better my skills. I hope by the end of my education to have landed a nice job in web development as this is something I hope to be doing for the rest of my life. I enjoy creating things and seeing others genuinely use and enjoy the end product."],
                      loop: false,
                      autoStart: true,
                      deleteSpeed: 604800000,
                    }}
                  />
                )}
              </p>
            </div>
            <h2 className={`text-white font-semibold sm:text-2xl text-lg xl:px-0 px-8 font-kanit`}>
              I&apos;m currently learning a number of languages, frameworks and libraries.
            </h2>
            <ul className='flex flex-row flex-wrap gap-2 mt-2 rounded-md w-fit xl:px-0 px-8'>
              <Techicon href='https://www.typescriptlang.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' delay={0.1} rounded={true} />
              <Techicon href='https://www.javascript.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay={0.2} rounded={true} />
              <Techicon href='https://html.com/html5/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' delay={0.3} />
              <Techicon href='https://www.w3schools.com/css/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' delay={0.4} />
              <Techicon href='https://nodejs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay={0.5} />
              <Techicon href='https://nextjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' delay={0.6} />
              <Techicon href='https://reactjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay={0.7} />
              <Techicon href='https://discord.js.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' delay={0.8} rounded={true} />
              <Techicon href='https://www.mongodb.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' delay={0.9} />
              <Techicon href='https://fastify.io/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png' delay={1.0} />
              <Techicon href='https://tailwindcss.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' delay={1.1} />
              <Techicon href='https://www.framer.com/motion/' src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png' delay={1.2} />
            </ul>
            <h2 className={`text-white font-semibold sm:text-2xl text-lg font-kanit text-right pt-24 xl:px-0 px-8`}>
              Here are some of the tools and services I use during and after development.
            </h2>
            <ul className='flex flex-row flex-wrap gap-2 mt-2 self-end rounded-md w-fit xl:px-0 px-8'>
              <Techicon href='https://code.visualstudio.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay={0.1} />
              <Techicon href='https://insomnia.rest/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png' delay={0.2} />
              <Techicon href='https://www.putty.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg' delay={0.3} />
              <Techicon href='https://winscp.net/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/8qx6q91yedkiub4285.png' delay={0.4} />
              <Techicon href='https://www.hetzner.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png' delay={0.5} />
              <Techicon href='https://porkbun.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png' delay={0.6} />
              <Techicon href='https://www.cloudflare.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png' delay={0.7} />
            </ul>
          </div>
        </section>
        <section className='relative bg-slate-900 pb-8'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,106.7C672,117,768,203,864,224C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          <div id="projects" className='flex flex-col text-center gap-y-3'>
            <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit pt-24`}>
              Projects
            </h1>
            <p className={`text-white font-semibold sm:text-3xl text-xl font-kanit px-4`}>
              Here are some projects I have worked on in the past.
            </p>
          </div>
          <ul className='grid lg:grid-cols-3 grid-cols-1 max-w-5xl w-full mx-auto gap-4 pt-8 pb-16 lg:px-0 md:px-32 px-8'>
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/38q1ernjfyann7b590.png'
              title='E-Z.Host'
              description='E-Z.host is a private ShareX file uploader that comes with a couple other mini features like a URL shortener and pastes. Me and my friend work together on e-z.host. I mainly do frontend and he mainly does backend.'
              href='https://e-z.host/'
              delay={0.1}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/thtbtb35c8ismwu5ev.png'
              title='E-Z.Bio'
              description='E-Z.Bio is a side service for E-Z.host users. Its a bio link website used to put all your socials in once place. Me and my friend work together on e-z.bio. I mainly do frontend and he mainly does backend.'
              href='https://e-z.bio/'
              delay={0.2}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/9fh70jey.png'
              title='E-Z.gg'
              description='E-Z.gg is a site to show off the entire E-Z staff team and all of our related projects. e-z.gg was made entirely by me.'
              href='https://e-z.gg/'
              delay={0.3}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/6wkmhejr64fctl11ce.png'
              title='E-Z Tickets'
              description='E-Z Tickets is a fast and easy to setup ticket bot. It has all the features that you would want but isn&apos;t bloated. E-Z tickets was made by me.'
              href='https://e-z.host/tickets'
              delay={0.1}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/5a1b2k7554mwodo0kn.png'
              title='TNTTag Info'
              description='TNTTag info is a stats website for the Hypixel game &quot;TNT Tag&quot;. It shows specific stats and overall leaderboards. The entire frontend and backend of tnttag.info was made by me.'
              href='https://tnttag.info/'
              delay={0.2}
            />
            <Projectcard
              src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/46loh4yo.png'
              title='Oliver Bot'
              description='Oliver Bot is a bot that sends pictures of my ferret oliver. It has a couple other animal api commands too. Oliver bot was made by me.'
              href='https://oliver.pictures/'
              delay={0.3}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/5a1b2k7554mwodo0kn.png'
              title='TNTTag Info'
              description='TNTTag info is a stats website for the Hypixel game &quot;TNT Tag&quot;. It shows specific stats and overall leaderboards. The entire frontend and backend of tnttag.info was made by me.'
              href='https://tnttag.info/'
              delay={0.1}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/z5fxiscvmm9d8qyham.png'
              title='Guild Verify Bot'
              description='Guild Veirfy is a bot that gives your Hypixel guild members roles based on what ranks they have in game. Guild verify bot was made by me.'
              href="#"
              delay={0.2}
            />
            <Projectcard
              src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/igpppynf.png'
              title='Guild Chat Bot'
              description='Guild Chat Bot is a bot that creates a bridge between discord and in-game chat to allow communication between the two. Guild chat bot was made by me.'
              href="#"
              delay={0.3}
            />
            <Projectcard
              src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/us8fpaug.png'
              title='Stellar Bots Website'
              description='Stellar Bots is a group of bots made by my friend. I remade his old website design for him with tailwindcss and added animations.'
              href='https://stellarbot.dev/'
              delay={0.1}
            />
            <Projectcard
              src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/sst4exui.png'
              title='Slosint Tools Website'
              description='Slosint is a website for a group of osint tools made by my friend. I made the entire frontend of slosint tools.'
              href='https://slosint.com/'
              delay={0.2}
            />
            <Projectcard
              src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/hjyak8dvlxhyge59tc.png'
              title='vCloud Website'
              description='vCloud is a c# battle.net checker made by my friend. I made the landing page for him. <em>This website is fairly old and doesn&apos;t really represent my current skill level.</em>'
              href='https://vcloud.gg/'
              delay={0.3}
            />
          </ul>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,106.7C672,96,768,160,864,192C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </main>
    </>
  )
}
