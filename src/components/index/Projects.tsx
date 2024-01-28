import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://e-z.host"
            title="E-Z.Host"
            description="E-Z.Host is an easy to use and easy to integrate file sharing platform. It has plenty of domain options, tons of URL options, and an extensive embed editor."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/bnzq10sh.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://e-z.bio"
            title="E-Z.Bio"
            description="E-Z.Bio is a feature rich bio link platform with an easy to use interface and tons of customization options. You can have a full page setup within minutes."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/jg8fu2hr.png"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://e-z.gg"
            title="E-Z.gg"
            description="E-Z.gg serves as a hub for all of E-Z's projects and services. It has information about each project and all of our staff. The dashboard for everything is also hosted here."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/w7fntv5m.png"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://discord.com/oauth2/authorize?client_id=1052415589995516014&permissions=8&scope=bot"
            title="E-Z Tickets"
            description="E-Z Tickets is a light weight discord ticket system that can be setup fully with 1 command. It has everything you would need without the bloat that comes with other options."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/666x1pn5.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://hydropper.info"
            title="HyDropper Info"
            description="HyDropper info is a stats website for the Hypixel game 'Dropper'. You can view player stats or view the top 100 leaderboard. It also holds general information about the game."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/j64ff1rn.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://tnttag.info"
            title="TntTag Info"
            description="TntTag info is a stats website for the Hypixel game 'TNT Tag'. You can view player stats or view the top 100 leaderboard. There is also a discord bot you can invite to your server."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/bjl7245d.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
