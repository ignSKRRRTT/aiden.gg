import { ReactNode } from "react";

export default function TechBadge({ title, icon, link }: { title: string, icon: ReactNode, link: string }) {
  return (
    <>
      <li className="flex">
        <a href={link} target="_blank" className="p-2 bg-secondary hover:bg-accent border-1 border-accent rounded-lg flex flex-row gap-2 items-center ml-2 duration-300">
          {icon}
          <span className="font-leaguespartan text-center font-semibold text-base text-text mt-0.5">{title}</span>
        </a>
      </li>
    </>
  );
}
