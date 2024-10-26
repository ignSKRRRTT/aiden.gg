import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Work Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://out.so"
                        title="Out.so"
                        fullDescription={[
                            "While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs.",
                            "Out is a service that allows content creators to easily upload content between all of their platforms. Creators can upload their video to Out and schedule it to be posted on all of their social media platforms at once. Out also allows creators to import videos from existing platforms and schedule them to be posted on other platforms.",
                        ]}
                        cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xt9q5o0l.png"
                        cardDescription="While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs."
                        media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tcjt9h7x.mp4"]}
                        myRole="Fullstack Developer"
                        timeline="September 2024 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
