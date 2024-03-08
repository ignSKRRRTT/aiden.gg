import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> },
    { title: "CSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> },
    { title: "TailwindCSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /> },
    { title: "React", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> },
    { title: "NextJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /> },
    { title: "Framer Motion", icon: <img draggable={false} loading="lazy" className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png" /> },
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> },
    { title: "TypeScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> },
    { title: "NodeJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> },
    { title: "MongoDB", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> },
    { title: "DiscordJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" /> },
    { title: "Fastify", icon: <img draggable={false} loading="lazy" className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png" /> },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> },
    { title: "Github", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> },
    { title: "NPM", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /> },
    { title: "Visual Studio Code", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /> },
    { title: "Insomnia", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png" /> },
    { title: "Cloudflare", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" /> },
    { title: "Hetzner", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" /> },
    { title: "Porkbun", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png" /> },
    { title: "Vercel", icon: <svg className="h-6 w-6 fill-[#000000]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg> },
    { title: "Linux", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> },
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="I have been interested in web development since the age of 15 but never attempted to create anything until I was almost 17 as I never knew where to start. By the end of my education, I hope to secure a rewarding job in web development, as it is a lifelong passion of mine. I enjoy creating things and find great satisfaction when others genuinely use and appreciate the end product."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend"
            description="I have about a year of experience with frontend development, and I have worked with a variety of different frameworks and libraries."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="I haven't had as much experience with backend development, but I am currently learning how to use NodeJS and Fastify to create APIs."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Other Technologies"
            description="When it comes to the development process, I use a wide variety of tools, services, and technologies."
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
