import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
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
            title="E-Z Host"
            description="E-Z Host is an easy to use and easy to integrate file sharing platform. It's meant for uploading and sharing screenshots, video clips, and other files quickly and easily."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xalg1ac2.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://e-z.bio"
            title="E-Z Bio"
            description="E-Z Bio is a feature rich bio link platform with an easy to use interface and tons of customization options. You can have a full page setup within minutes."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/p1l218mg.png"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://e-z.gg"
            title="E-Z Services"
            description="The E-Z services website serves as a hub for all of E-Z's projects. It has information about each project and all of our staff. The dashboard for everything is also hosted here."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/rte9hp3m.png"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://lilith.aiden.gg"
            title="Lilith Website"
            description="Lilith is a proxy mod for Hypixel that mainly allows you to see the stats of other players in your game. It has been discontinued and I am hosting a copy of the website for my portfolio."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/k2irxpbf.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://discord.com/oauth2/authorize?client_id=1052415589995516014&permissions=8&scope=bot"
            title="E-Z Tickets"
            description="E-Z Tickets is a light weight discord ticket system that can be setup fully with 1 command. It has everything you would need without the bloat that comes with other options."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qmk84wzt.png"
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://tnttag.info"
            title="TNTTag Info"
            description="TNTTag info is a stats website for the Hypixel game 'TNT Tag'. You can view player stats or view the top 100 leaderboard. There is also a discord bot you can invite to your server."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/r6d0yws7.png"
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
