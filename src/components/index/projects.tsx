import Projectcard from '@/components/projectcard';

export default function Projects() {
    return (
        <>
            <section className='relative bg-slate-900 pb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,106.7C672,117,768,203,864,224C960,245,1056,203,1152,160C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div id="projects" className='flex flex-col text-center gap-y-3'>
                    <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit pt-24`}>
                        Projects
                    </h1>
                    <p className={`text-white font-semibold sm:text-3xl text-xl font-kanit px-4`}>
                        Here are some projects I have worked on in the past.
                    </p>
                </div>
                <ul className='grid lg:grid-cols-3 grid-cols-1 max-w-5xl w-full mx-auto gap-4 pt-8 pb-16 lg:px-0 md:px-32 px-8'>
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/38q1ernjfyann7b590.png'
                        title='E-Z.Host'
                        description='E-Z.host is a private ShareX file uploader that comes with a couple other mini features like a URL shortener and pastes. Me and my friend work together on e-z.host. I mainly do frontend and he mainly does backend.'
                        href='https://e-z.host/'
                        delay={0.1}
                    />
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/thtbtb35c8ismwu5ev.png'
                        title='E-Z.Bio'
                        description='E-Z.Bio is a side service for E-Z.host users. Its a bio link website used to put all your socials in once place. Me and my friend work together on e-z.bio. I mainly do frontend and he mainly does backend.'
                        href='https://e-z.bio/'
                        delay={0.2}
                    />
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/9fh70jey.png'
                        title='E-Z.gg'
                        description='E-Z.gg is a site to show off the entire E-Z staff team and all of our related projects. e-z.gg was made entirely by me.'
                        href='https://e-z.gg/'
                        delay={0.3}
                    />
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/6wkmhejr64fctl11ce.png'
                        title='E-Z Tickets'
                        description='E-Z Tickets is a fast and easy to setup ticket bot. It has all the features that you would want but isn&apos;t bloated. E-Z tickets was made by me.'
                        href='https://e-z.host/tickets'
                        delay={0.1}
                    />
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/5a1b2k7554mwodo0kn.png'
                        title='TNTTag Info'
                        description='TNTTag info is a stats website for the Hypixel game &quot;TNT Tag&quot;. It shows specific stats and overall leaderboards. The entire frontend and backend of tnttag.info was made by me.'
                        href='https://tnttag.info/'
                        delay={0.2}
                    />
                    <Projectcard
                        src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/hvc9a4np.png'
                        title='Aiden.gg (This website)'
                        description='Aiden.gg is my personal website/portfolio. This is where I showcase my projects and skills. This website is open src on github!'
                        href='https://github.com/ignSKRRRTT/aiden.gg'
                        delay={0.3}
                    />
                    <Projectcard
                        src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/46loh4yo.png'
                        title='Oliver Bot'
                        description='Oliver Bot is a bot that sends pictures of my ferret oliver. It has a couple other animal api commands too. Oliver bot was made by me.'
                        href='https://oliver.pictures/'
                        delay={0.1}
                    />
                    <Projectcard
                        src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/z5fxiscvmm9d8qyham.png'
                        title='Guild Verify Bot'
                        description='Guild Veirfy is a bot that gives your Hypixel guild members roles based on what ranks they have in game. Guild verify bot was made by me.'
                        href="#"
                        delay={0.2}
                    />
                    <Projectcard
                        src='https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/igpppynf.png'
                        title='Guild Chat Bot'
                        description='Guild Chat Bot is a bot that creates a bridge between discord and in-game chat to allow communication between the two. Guild chat bot was made by me.'
                        href="#"
                        delay={0.3}
                    />
                </ul>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f172a" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,106.7C672,96,768,160,864,192C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}
