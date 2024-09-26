"use client";

import Image from 'next/image';
import ProjectProps from "@/interfaces/projects/ProjectProps";

function comaSeparator(arr: Array<string>) {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr.join(" & ");

    return 0;
}

function compLangunageKBD(language: string) {
    return <span className="rounded-sm me-2 kbd kbd-xs group-hover:border-gray-400">{language}</span>;
}

export default function Card({ devices, visibility, createdTime, title, language, imageSource, imageAlt, description, hrefTarget }: ProjectProps) {
    return (
        <li className="font-mono transition-all border border-gray-400 card-body hover:border-gray-700 group">
            <div className="head">
                <div className="flex items-center justify-between mb-4 text-xs align-baseline text-slate-400 group-hover:text-black">
                    <span className="rounded-sm me-2 kbd kbd-xs group-hover:border-gray-400">{visibility}</span>
                    <span>{createdTime}</span>
                </div>
                <a href="#links">
                    <h4 className="pb-1 mb-0 text-lg font-bold lg:text-xl line-clamp-2 hover:underline decoration-wavy underline-offset-4">
                        {title}
                    </h4>
                </a>
                <p className="mb-2 text-xs font-thin md:text-sm text-slate-500 group-hover:text-slate-600">device : {comaSeparator(devices)}</p>
            </div>
            <a href="#links">
                <figure className="mb-2 overflow-hidden">
                    <Image
                        className="transition-all group-hover:scale-105 size-full"
                        src={imageSource}
                        alt={imageAlt}
                        width={500}
                        height={300}
                    />
                </figure>
            </a>

            <p className="mb-2 text-xs line-clamp-1 text-slate-500 group-hover:text-black">
                {language.map(function (lang) {
                    return compLangunageKBD(lang);
                })}
            </p>
            <p className="mb-4 text-sm line-clamp-3 text-slate-600 group-hover:text-slate-950">
                {description}
            </p>
            <div className="flex-grow"></div>
            <button className="btn rounded-none text-slate-500 group-hover:text-slate-800 border-slate-500 group-hover:border-slate-700 hover:bg-black hover:!text-white transition-all" >
                <a href={hrefTarget}> show details </a>
            </button>
        </li>
    );
}
