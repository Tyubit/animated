"use client";

import React from 'react'
import { PeopleCard } from './PeopleCard'
import { motion, Variants } from "framer-motion";

const brands = [
    "Meta",
    "Samsung",
    "Intel Corporation",
    "Oracle",
    "Adobe",
    "Figma",
];
const abilites = {
    "Web design": ["Product design","Product design","UX & UI design","Art direction"],
    "Web design": ["Ecommerce","Back-end","Front-end","Responsive"],

}

export const About = () => {
return (
    <section className='mt-56'>
        <header className='flex flex-col items-center pb-24'>
            <h4 className='font-bold'>Since 2017</h4>
            <p className='font-serif text-[18px]'>We are award winning design studio</p>
        </header>
        <h1 className="uppercase text-[170px] font-bold text-center leading-[0.9] tracking-tighter pb-24">From<br/>London, UK.</h1>
        <p className='text-[64px] font-serif text-center'>We hold the conviction that excellent design<br />transcends mere appearance — it serves as a vital<br />medium for communication and engagement.</p>

        <div className='flex justify-center mt-[130px]'>
            <PeopleCard style=" z-3"/>
            <PeopleCard style="absolute z-2"/>
            <PeopleCard style=" z-1"/>
        </div>

        <div className='w-screen h-fit overflow-x-hidden mt-[150px]'>
            <motion.ul className="flex text-[96px] whitespace-nowrap gap-x-[120px]"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear"
                }}>
                {[...brands, ...brands].map((brand, index) => (
                    <li key={index}>{brand}</li>
                ))}
            </motion.ul>
        </div>

        <div className='flex flex-col items-end-safe mr-64'>
            <h2 className='font-serif text-[64px]'>Our Capabilites</h2>
            <div className='flex gap-32 text-[24px] '>
                <ul className=''>
                    <li>Web design</li>
                    <li>Product design</li>
                    <li>Product design</li>
                    <li>UX & UI design</li>
                    <li>Art direction</li>
                </ul>
                <ul className=''>
                    <li>Visual Design</li>
                    <li>Ecommerce</li>
                    <li>Back-end</li>
                    <li>Front-end</li>
                    <li>Responsive</li>
                </ul>
            </div>
        </div>
    </section>
)
}
