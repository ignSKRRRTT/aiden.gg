import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { title: "TailwindCSS", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />, link: "https://tailwindcss.com/" },
    { title: "React", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />, link: "https://react.dev/" },
    { title: "NextJS", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />, link: "https://nextjs.org/" },
    { title: "Framer Motion", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/5q2uj9zv.png" />, link: "https://www.framer.com/motion/" },
    { title: "Sass", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />, link: "https://sass-css.org/"}
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />, link: "https://www.javascript.com/" },
    { title: "TypeScript", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />, link: "https://www.typescriptlang.org" },
    { title: "NodeJS", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />, link: "https://nodejs.org/" },
    { title: "MongoDB", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "DiscordJS", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" />, link: "https://discord.js.org/" },
    { title: "Fastify", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/g9j04tdrsj5wwzw76d.png" />, link: "https://fastify.dev/" },
    { title: "Bun", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" />, link: "https://bun.sh/"},
    { title: "Elysia", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/y1iick8a.png" />, link: "https://elysiajs.com/"}
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "NPM", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />, link: "https://www.npmjs.com/" },
    { title: "Visual Studio Code", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Insomnia", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qr3zqlfckx6hkdj0nl.png" />, link: "https://insomnia.rest/" },
    { title: "Cloudflare", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" />, link: "https://www.cloudflare.com/" },
    { title: "Hetzner", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/q4dzhs1beprvugs13m.png" />, link: "https://www.hetzner.com/" },
    { title: "Porkbun", icon: <img draggable={false} className="h-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/z3xmhz3k1rc24l433c.png" />, link: "https://porkbun.com/" },
    { title: "Vercel", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" />, link: "https://vercel.com/" },
    { title: "Linux", icon: <img draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
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
            description="I haven't had as much experience with backend development. I am currently learning how to use Fastify (nodejs) and Elysia (bun) to create APIs."
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
