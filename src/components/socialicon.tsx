import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { JsxAttribute } from "typescript";
import { ReactNode } from "react";

export default function Socialicon({ href, svg, delay }: { href: string, svg: ReactNode, delay: number }) {
    return (
        <>
            <motion.li
                initial={{ transform: 'translateY(20px)', opacity: 0 }}
                whileInView={{ transform: 'translatey(0px)', opacity: 100 }}
                transition={{ duration: 1, delay: delay, ease: [0.39, 0.21, 0.12, 0.96], }}
                viewport={{ amount: 1, once: true }}
            >
                <Link className={`flex h-12 w-12 rounded-full bg-slate-900 duration-300 hover:bg-slate-800`} draggable={false} href={href} target={'_blank'}>
                    {svg}
                </Link>
            </motion.li>
        </>
    )
}
