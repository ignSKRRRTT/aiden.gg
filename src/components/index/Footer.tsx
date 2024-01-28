import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <h2 className="font-leaguespartan text-center font-semibold text-base text-text pt-2">
                    Aiden.gg - Made with NextJS, TailwindCSS, and ❤ by me
                </h2>
            </footer>
        </>
    );
}
