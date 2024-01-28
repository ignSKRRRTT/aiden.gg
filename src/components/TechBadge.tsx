import { ReactNode } from "react";

export default function TechBadge({ title, icon }:{ title: string, icon: ReactNode }) {
  return (
    <>
      <li className="p-2 bg-secondary border-1 border-accent rounded-lg flex flex-row gap-2 items-center first:ml-2">
        {icon}
        <span className="font-leaguespartan text-center font-semibold text-base text-text">{title}</span>
      </li>
    </>
  );
}
