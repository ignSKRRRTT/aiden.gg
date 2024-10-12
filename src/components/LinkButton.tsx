import Link from "next/link";

export default function LinkButton({ label, link, width }: { label: string, link: string, width: string }) {
    return (
        <Link href={link} target="_blank" className={`${width} bg-primary hover:bg-secondary duration-300 border-1 border-accent px-2 py-1.5s text-lg font-medium flex items-center justify-center rounded-lg`}>
            {label}
        </Link>
    );
}
