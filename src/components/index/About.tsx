import Typewriter from 'typewriter-effect';
import TechIcon from '@/components/TechIcon';

export default function About({ refID, inView }: { refID: any; inView: boolean }) {
    return (
        <>
            <section className='relative bg-slate-950 pb-8'>
                <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit text-center pb-8`}>
                    A little about me.
                </h1>
                <div className='flex flex-col max-w-6xl w-full mx-auto '>
                    <div className='bg-slate-900 self-center w-3/4 rounded-md overflow-hidden border-2 border-blue-700 hover:-translate-y-1 duration-300 p-4 mb-16'>
                        <p ref={refID} className={`text-white text-md font-kanit`}>
                            {inView && (
                                <Typewriter
                                    options={{
                                        delay: 30,
                                        strings: ["My name is Aiden, and I'm 18 years old. Currently, I live in New York. I have been interested in web development since the age of 15 but never really attempted to create anything until I was almost 17. I graduated from high school a year and a half early and plan to use this time before college to improve my skills. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine. I enjoy creating things and find great satisfaction when others genuinely use and appreciate the end product."],
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
                        <TechIcon href='https://www.typescriptlang.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' delay={0.1} rounded={true} />
                        <TechIcon href='https://www.javascript.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay={0.2} rounded={true} />
                        <TechIcon href='https://html.com/html5/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' delay={0.3} />
                        <TechIcon href='https://www.w3schools.com/css/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' delay={0.4} />
                        <TechIcon href='https://nodejs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay={0.5} />
                        <TechIcon href='https://nextjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' delay={0.6} />
                        <TechIcon href='https://reactjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay={0.7} />
                        <TechIcon href='https://discord.js.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' delay={0.8} rounded={true} />
                        <TechIcon href='https://www.mongodb.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' delay={0.9} />
                        <TechIcon href='https://fastify.io/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png' delay={1.0} />
                        <TechIcon href='https://tailwindcss.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' delay={1.1} />
                        <TechIcon href='https://www.framer.com/motion/' src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png' delay={1.2} />
                    </ul>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg font-kanit text-right pt-24 xl:px-0 px-8`}>
                        Here are some of the tools and services I use during and after development.
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 self-end rounded-md w-fit xl:px-0 px-8'>
                        <TechIcon href='https://code.visualstudio.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay={0.1} />
                        <TechIcon href='https://insomnia.rest/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png' delay={0.2} />
                        <TechIcon href='https://www.putty.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg' delay={0.3} />
                        <TechIcon href='https://winscp.net/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/8qx6q91yedkiub4285.png' delay={0.4} />
                        <TechIcon href='https://www.hetzner.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png' delay={0.5} />
                        <TechIcon href='https://porkbun.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png' delay={0.6} />
                        <TechIcon href='https://www.cloudflare.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png' delay={0.7} />
                    </ul>
                </div>
            </section>
        </>
    )
}
