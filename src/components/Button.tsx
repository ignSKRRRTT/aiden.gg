export default function Button({ label, onClick, width }: { label: string, onClick: () => void, width: string }) {
    return (
        <button onClick={onClick} className={`${width} bg-primary hover:bg-secondary duration-300 border-1 border-accent px-2 py-1.5 text-lg font-medium flex items-center justify-center rounded-lg`}>
            {label}
        </button>
    );
}
