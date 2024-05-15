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
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.2}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.2}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://xpert-sable.vercel.app/"
            title="Xpert's website"
            description="My First Website."
            image="https://github.com/xpertlol/images/blob/main/Screenshot%202024-05-14%205.59.28%20PM.png?raw=true"
            delay={0.2}
            gradient="bg-gradient-to-br"
          />
        </ul>
      </section>
    </>
  );
}
