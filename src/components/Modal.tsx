import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({ children, open, setOpen }: { children: ReactNode, open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-[150]" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 backdrop-blur-sm transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center items-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-0 translate-y-4 sm:translate-y-0"
                                enterTo="opacity-100 scale-100 translate-y-0"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100 translate-y-0"
                                leaveTo="opacity-0 scale-0 translate-y-4 sm:translate-y-0"
                            >
                                <Dialog.Panel className={`max-w-[52rem] w-full relative transform overflow-hidden rounded-md bg-secondary border-1 border-accent md:p-6 p-4 sm:m-8 mx-4 my-8 shadow-xl transition-all`}>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}