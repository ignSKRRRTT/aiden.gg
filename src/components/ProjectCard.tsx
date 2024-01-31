import { motion } from "framer-motion";

export default function ProjectCard({ url, title, description, image, delay, gradient }:{ url: string, title: string, description: string, image: string, delay: number, gradient: string}) {
  return (
    <>
      <motion.li
        className="group flex"
        initial={{ transform: 'translateY(-30px)', opacity: 0 }}
        whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
        transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
        viewport={{ amount: 0.1, once: true }}
      >
        <a draggable={false} href={url} target="_blank" className={`p-4 flex flex-col ${gradient} from-primary to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background`}>
          <img draggable={false} className="rounded-lg border-1 border-accent mb-4 grayscale group-hover:grayscale-0 duration-300" src={image} />
          <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
            {title}
          </h2>
          <p className="font-leaguespartan text-center text-xl text-text">
            {description}
          </p>
        </a>
      </motion.li>
    </>
  );
}
