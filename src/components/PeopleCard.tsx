"use client";
import Image from 'next/image';
import person from "../../public/person.png"
import { ReactNode, useState } from "react";

type PeopleCardProps = {
    style?: string;
};

export const PeopleCard = ({ style }: PeopleCardProps) => {

return (
    <div className={`flex flex-col items-center transform perspective-1000  rotate-x-15 rotate-y-45 ${style}  transition-all duration-300 ease-out hover:rotate-x-0 hover:rotate-y-0 hover:z-30 hover:scale-105`}>
        <Image className="rounded-[24px]" src={person} alt="person" width={250} height={250} />
        <div className='flex flex-col items-center p-6 '>
            <h4 className='font-bold uppercase tracking-tight mb-2 leading-0'>Riley Howells</h4>
            <p className='font-serif text-[18px]'>Developer</p>
        </div>
    </div>
)
}
