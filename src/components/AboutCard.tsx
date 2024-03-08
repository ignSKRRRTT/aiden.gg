import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import TechBadge from "@/components/TechBadge";
import Marquee from "react-fast-marquee";
import { Tech } from "../../typings";

export default function AboutCard({ title, description, tech, direction, span, gradient, delay }: { title: string, description: string, tech?: Tech[], direction: 'top' | 'bottom' | 'left' | 'right', span: 1 | 2, gradient: string, delay: number}) {
    return (
        <>
            <motion.li
                className={`${span === 1 ? 'md:col-span-1 col-span-2' : 'col-span-2'} ${gradient} from-primary to-secondary p-4 flex flex-col rounded-lg border-1 border-accent shadow-2xl shadow-background`}
                initial={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(${direction === 'top' || direction === 'left' ? '-' : ''}30px)`, opacity: 0 }}
                whileInView={{ transform: `translate${direction === 'top' || direction === 'bottom' ? 'Y' : 'X'}(0px)`, opacity: 100 }}
                transition={{ duration: 0.5, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.1, once: true }}
            >
                <h2 className="font-leaguespartan text-center font-semibold text-4xl text-text">
                    {title}
                </h2>
                <p className="font-leaguespartan text-center text-xl text-text mb-2">
                    {description}
                </p>
                {tech &&
                    <>
                        <Divider />
                        <Marquee className="my-2">
                            <ul className="flex flex-row">
                                {tech.map((tech: Tech) => (
                                    <TechBadge key={tech.title} title={tech.title} icon={tech.icon} />
                                ))}
                            </ul>
                        </Marquee>
                        <Divider />
                    </>
                }
            </motion.li>
        </>
    );
}
