import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';

const sites = [
    { name: 'E-Z.Host', url: 'https://e-z.host' },
    { name: 'E-Z.Bio', url: 'https://e-z.bio' },
    { name: 'Youtube', url: 'https://youtube.com' },
    { name: 'Protonmail', url: 'https://proton.me' },
    { name: 'Cloudflare', url: 'https://cloudflare.com' },
    { name: 'Sellix', url: 'https://sellix.io' },
    { name: 'Tailwind', url: 'https://tailwindcss.com' },
    { name: 'Discord JS', url: 'https://discord.js.org' },
    { name: 'Hetrix Tools', url: 'https://hetrixtools.com' },
    { name: 'E-Z Monitor', url: 'https://monitor.e-z.host' },
    { name: 'Chat GPT', url: 'https://chat.openai.com' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Home() {
    const router = useRouter()

    const [selected, setSelected] = useState(sites[0])

    const [pageLoad, setPageLoad] = useState(false);
    const [titleColor, setTitleColor] = useState('text-white');

    const [search, setSearch] = useState('')

    useEffect(() => {
        setPageLoad(true)
        setTimeout(() => {
            setTitleColor('text-blue-600')
        }, 300)
    }, [])

    function handleInput(e: any) {
        setSearch(e.target.value.replaceAll(' ', '+'))
    }

    function handleEnter(e: any) {
        if (e.key === 'Enter') {
            window.open(`https://google.com/search?q=${search}`, '_blank')
            setSearch('')
        }
    }

    function handleSelect(e: any) {
        setSelected(e)
        window.open(e.url, '_blank')
    }


    return (
        <>
            <Head>
                <title>Aiden.gg</title>
                <meta name="description" content="Aiden's (aka SKRRRTT) personal site" />
                <meta property="og:image" content="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/lbo1x6wn.png" />
                <meta property='theme-color' content='#17171a' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex h-screen flex-col justify-center'>
                <div className='max-w-5xl w-full mx-auto'>
                    <h1 className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} text-white font-bold sm:text-6xl text-4xl font-kanit text-center`}>
                        Welcome back,
                        <span className={`duration-1000 ${titleColor}`}> Aiden</span>
                        👋
                    </h1>
                    <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} w-1/2 mx-auto pt-8`}>
                        <label htmlFor="search" className="block text-sm font-medium leading-6 text-white">
                            Search Google
                        </label>
                        <div className="relative mt-2 flex items-center">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                value={search.replaceAll('+', ' ')}
                                placeholder="Search..."
                                onChange={handleInput}
                                onKeyDown={handleEnter}
                                className=" pl-2 block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <Listbox value={selected} onChange={handleSelect}>
                        {({ open }) => (
                            <>
                                <div className={`${pageLoad ? 'animate-fade-in-bottom' : 'opacity-0'} relative mt-2 w-1/2 mx-auto`}>
                                <Listbox.Label className="block text-sm font-medium leading-6 text-white">Favorite Sites</Listbox.Label>
                                    <Listbox.Button className="mt-2 relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
                                        <span className="inline-flex w-full truncate">
                                            <span className="truncate">{selected.name}</span>
                                            <span className="ml-2 truncate text-gray-500">{selected.url}</span>
                                        </span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                        
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {sites.map((person) => (
                                                <Listbox.Option
                                                    key={person.url}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active ? 'bg-blue-600 text-white' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <div className="flex">
                                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                                    {person.name}
                                                                </span>
                                                                <span className={classNames(active ? 'text-blue-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                                    {person.url}
                                                                </span>
                                                            </div>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-white' : 'text-blue-600',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </main>
        </>
    )
}
