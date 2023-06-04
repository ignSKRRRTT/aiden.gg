import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Techicon({ href, src, delay, rounded }: { href: string, src?: string, delay: number, rounded?: boolean }) {
    return (
        <>
            <motion.li
                initial={{ transform: 'translateY(20px)', opacity: 0 }}
                whileInView={{ transform: 'translatey(0px)', opacity: 100 }}
                transition={{ duration: 1, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 1, once: true }}
            >
                <Link className={`flex bg-slate-900 p-2.5 rounded-full duration-300 hover:bg-slate-800`} draggable={false} href={href} target="_blank" ><img className={`${rounded ? 'rounded-md' : 'rounded-none'} h-8 w-8`} draggable='false' alt="image" src={src} /></Link>
            </motion.li>
        </>
    )
}
