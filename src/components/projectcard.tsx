import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Projectcard({ src, title, description, href, delay }: { src: string, title: string, description: string, href: string, delay: number }) {
    return (
        <>
            <motion.li
                initial={{ transform: 'translateY(20px)', opacity: 0 }}
                whileInView={{ transform: 'translatey(0px)', opacity: 100 }}
                transition={{ duration: 1, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 0.2, once: true }}
            >
                <Link className={`block h-full bg-slate-950 w-full rounded-md overflow-hidden border-2 border-blue-700 hover:-translate-y-1 duration-300`} draggable={false} href={href} target={href !== '#' ? '_blank' : ''}>
                    <img draggable={false} className='border-b-2 border-blue-700' alt="image" src={src}></img>
                    <h2 className='text-white font-bold text-2xl font-kanit pl-4 pt-4'>
                        {title}
                    </h2>
                    <p className={`text-white text-lg font-kanit px-4 pb-4`}>
                        {description}
                    </p>
                </Link>
            </motion.li>
        </>
    )
}
