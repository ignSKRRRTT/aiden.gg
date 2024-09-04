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
            fullDescription={[
              "E-Z Host is an easy to use and easy to integrate file sharing platform. It's meant for uploading and sharing screenshots, video clips, and other files quickly and easily.",
              "I support the project financially and manage most of the upkeep of the website. I do the majority of the frontend development and some of the backend development.",
              "Over my time working on E-Z Host I have learned numerous things about web development and have improved my skills in many areas. I started this project before I knew how to code and used an open source file host as a base. Tsoxas came along and carried the website through the first year or so of development, adding new things onto the open source base and then eventually recoding everything.",
              "Eventually I learned how to code, recoded everything frontend wise, and took over most of the development. I don't think I would be where I am today without this project and I am very grateful for it.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xalg1ac2.png"
            cardDescription="E-Z Host is an easy to use and easy to integrate file sharing platform. It's meant for uploading and sharing screenshots, video clips, and other files quickly and easily."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/hf7i7o31.mp4",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/yrk5zedf.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tb8jdveo.png"
            ]}
            myRole="Founder, Head Developer, Designer"
            myTimeline="March 2021 - Present"
            projectTimeline="March 2021 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer, Designer", url: "https://aiden.gg" },
              { name: "Tsoxas", role: "Backend Developer", url: "https://tsoxas.codes" },
              { name: "Nathan", role: "Backend Developer", url: "https://e-z.bio/verity" }
            ]}
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://e-z.bio"
            title="E-Z Bio"
            fullDescription={[
              "E-Z Bio is a feature rich bio link platform with an easy to use interface and tons of customization options. You can have a full page setup within minutes.",
              "I support the project financially and manage most of the upkeep of the website. I do the majority of the frontend development and some of the backend development.",
              "E-Z Bio started as a side service for the users of our main service E-Z Host. It blew up and people started getting E-Z just for the bio link. It is one of the main reasons that E-Z as a whole is still very active today and I am very grateful for the user base that has built up around E-Z Bio. The website has tought me many things frontend wise and is probably one of my favorite projects to work on just because of how creative people have been able to get with it.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/p1l218mg.png"
            cardDescription="E-Z Bio is a feature rich bio link platform with an easy to use interface and tons of customization options. You can have a full page setup within minutes."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7zdwvchf.mp4",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/04s2qt5p.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7rivygg2.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lejpmjvp.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/4qh6eag6.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/x8capy8n.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/slub8gdh.png"
            ]}
            myRole="Founder, Head Developer, Designer"
            myTimeline="January 2022 - Present"
            projectTimeline="January 2022 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer, Designer", url: "https://aiden.gg" },
              { name: "Tsoxas", role: "Backend Developer", url: "https://tsoxas.codes" },
              { name: "Nathan", role: "Backend Developer", url: "https://e-z.bio/verity" }
            ]}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://e-z.gg"
            title="E-Z Services"
            fullDescription={[
              "The E-Z services website serves as a hub for all of E-Z's projects. It has information about each project and all of our staff. The dashboard for everything is also hosted here.",
              "I support the project financially and manage most of the upkeep of the website. I do the majority of the frontend development and some of the backend development.",
              "We started out with just E-Z Host but as we grew and made multiple other projects we needed a central place to display them all.",
              "Over my time working on E-Z I have learned numerous things about web development and have improved my skills in many areas. I started E-Z before I knew how to code and used an open source file host as a base. Tsoxas came along and carried the website through the first year or so of development, adding new things onto the open source base and then eventually recoding everything.",
              "Eventually I learned how to code, recoded everything frontend wise, and took over most of the development. I don't think I would be where I am today without E-Z and I am very grateful for it.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/rte9hp3m.png"
            cardDescription="The E-Z services website serves as a hub for all of E-Z's projects. It has information about each project and all of our staff. The dashboard for everything is also hosted here."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/2v0ymhiz.mp4",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/3xfw3xts.png"
            ]}
            myRole="Founder, Head Developer, Designer"
            myTimeline="March 2021 - Present"
            projectTimeline="March 2021 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer, Designer", url: "https://aiden.gg" },
              { name: "Tsoxas", role: "Backend Developer", url: "https://tsoxas.codes" },
              { name: "Nathan", role: "Backend Developer", url: "https://e-z.bio/verity" }
            ]}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://lilith.aiden.gg"
            title="Lilith"
            fullDescription={[
              "Lilith is a proxy mod for Hypixel that lets you to see the stats of other players in your game, auto dodge games that have cheaters, lookup stats for any player in game, and more.",
              "I wasn't in the team for very long because unfortunately right as my website was about to launch the creator of Lilith had to discontinue the project due to a change that Hypixel made that not only killed off Lilith but multiple other projects like it.",
              "Learned a couple new skills and learned about a couple new libraries while working on this project. Quite happy with how it turned out.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/k2irxpbf.png"
            cardDescription="Lilith is a proxy mod for Hypixel that lets you to see the stats of other players in your game, auto dodge games that have cheaters, lookup stats for any player in game, and more."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7l2m7dcd.mp4",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/oxj9zman.png"
            ]}
            myRole="Frontend Developer/Designer"
            myTimeline="August 2024 - August 2024"
            projectTimeline="January 2021 - August 2024"
            team={[
              { name: "Nea", role: "Founder, Head Developer", url: "https://github.com/nealol" },
              { name: "Zani", role: "Mod Developer", url: "https://github.com/Zxnii" },
              { name: "Yanice", role: "Mod Developer", url: "https://yanice.me/" },
              { name: "TheMackabu", role: "Mod Developer", url: "https://themackabu.dev/" },
              { name: "Aiden", role: "Frontend Developer/Designer", url: "https://aiden.gg" },
            ]}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <ProjectCard
            url="https://prax.wtf"
            title="Prax Client"
            fullDescription={[
              "Prax is a hacked client for Minecraft bedrock edition. It mainly focuses on PvP servers like Hive and Cubecraft and aims to have unique features that other clients don't have.",
              "Prax has been in and out of development for quite some time but with a really big recode coming up I offered my help to make them a new website. The website is still somewhat of a work in progress as the recode isn't finished yet but I feel it is coming along nicely."
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/7y4vcrgk.png"
            cardDescription="Prax is a hacked client for Minecraft bedrock edition. It mainly focuses on PvP servers like Hive and Cubecraft and aims to have unique features that other clients don't have."
            media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/zex2w95r.mp4"]}
            myRole="Frontend Developer/Designer"
            myTimeline="August 2024 - Present"
            projectTimeline="August 2022 - Present"
            team={[
              { name: "Flash", role: "Founder, Head Developer", url: "https://github.com/Flash-1337" },
              { name: "ASM", role: "Client Developer", url: "https://github.com/DisabledMallis" },
              { name: "Loud", role: "Client Developer", url: "https://github.com/loud2pro" },
              { name: "Harvs", role: "Client Developer", url: "https://github.com/h-arvs" },
              { name: "Aiden", role: "Frontend Developer/Designer", url: "https://aiden.gg" },
            ]}
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://github.com/ignSKRRRTT/aiden.gg"
            title="Portfolio"
            fullDescription={[
              "This is my portfolio website that I share everywhere online. It has links to all of my projects, links to all my socials, and a little bit about me and my development skills.",
              "This is not the first version of my portfolio website but it is the first one that I am proud of. Having a place to show off all of my projects and skills is very important to me. I love that I can make something and then display it here for everyone to see.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/omz5cqgk.png"
            cardDescription="This is my portfolio website that I share everywhere online. It has links to all of my projects, links to all my socials, and a little bit about me and my development skills."
            media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/omz5cqgk.png"]}
            myRole="Founder, Head Developer, Designer"
            myTimeline="December 2022 - Present"
            projectTimeline="December 2022 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer, Designer", url: "https://aiden.gg" },
            ]}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <ProjectCard
            url="https://discord.com/oauth2/authorize?client_id=1052415589995516014&permissions=8&scope=bot"
            title="E-Z Tickets"
            fullDescription={[
              "E-Z Tickets is a light weight discord ticket system that can be setup fully with 1 command. It has everything you would need without the bloat that comes with other options.",
              "It was one of my first discord bots and has been surprisingly successful with nearly 2,000 servers and over 400,000 members. I learned a lot about discord.js and discord bot development in general while working on this project.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qmk84wzt.png"
            cardDescription="E-Z Tickets is a light weight discord ticket system that can be setup fully with 1 command. It has everything you would need without the bloat that comes with other options."
            media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/qmk84wzt.png"]}
            myRole="Founder, Head Developer"
            myTimeline="December 2022 - Present"
            projectTimeline="December 2022 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer", url: "https://aiden.gg" },
            ]}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <ProjectCard
            url="https://tnttag.info"
            title="TNTTag Info"
            fullDescription={[
              "TNTTag info is a stats website for the Hypixel game 'TNT Tag'. You can view player stats or view the top 100 leaderboard. There is also a discord bot you can invite to your server.",
              "This website was made because at the time there wasn't a good place to view every single TNT Tag stat. TNT Tag is one of my favorite games on Hypixel and I wanted to make a website that would help the community.",
              "There is also a proxy mod to go along with it that uses the same API as the website. The mod has features like player list stats, audible count down, powerup notifications, and more.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/8e6lpnrw.png"
            cardDescription="TNTTag info is a stats website for the Hypixel game 'TNT Tag'. You can view player stats or view the top 100 leaderboard. There is also a discord bot you can invite to your server."
            media={[
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/8e6lpnrw.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/zptwyhjn.png",
              "https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/77qjr509.png"
            ]}
            myRole="Founder, Head Developer, Designer"
            myTimeline="March 2023 - Present"
            projectTimeline="March 2023 - Present"
            team={[
              { name: "Aiden", role: "Founder, Head Developer, Designer", url: "https://aiden.gg" },
            ]}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
