"use client";

import { motion, Variants } from "framer-motion";
import { MouseEventHandler, ReactNode, useState } from "react";
console.log("motion.li", motion.li);


const colorMap: Record<string, string> = {
    green: '#87E246',
    blue: '#1B30AE',
    orange: '#ED732E',
    grey: '#2B2B2B',
}

type ColorKey = keyof typeof colorMap;

export interface CardProps{
    title: string,
    color?: ColorKey,
    textColor?: string,
    tags?: string[],
    onClickEvent?: MouseEventHandler<HTMLDivElement>,
    children?: ReactNode,
}

const listVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
    },
},
};
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const Card3D: React.FC<CardProps> = ({ title, tags = [], color, textColor, children, onClickEvent }) => {
    const [isHovered, setIsHovered] = useState(false);
    const randomColor = () => {
        const values = Object.values(colorMap);
        return values[Math.floor(Math.random() * values.length)];
    };
    const bgColor = color ? colorMap[color] : randomColor();
return (
    <motion.article className={`w-full max-w-[708px] aspect-square overflow-hidden relative bg-[${bgColor}] rounded-4xl flex flex-col items-center`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        {children}
        <div className="flex flex-col items-center justify-end h-full z-10 mb-8">
            <h2 className={`text-[32px] ${textColor ?? "text-[var(--foreground)]"}`}>{title}</h2>
            <motion.ul className={`flex gap-2 mt-2.5 ${isHovered ? "visible" : "hidden"}`}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={listVariants}>
                {tags.map((tag, index) => (<motion.li className=" bg-[var(--background)] text-[var(--foreground)] rounded-full py-2 px-4"
                    key={index}
                    variants={itemVariants}>{tag}</motion.li>))}
            </motion.ul>
        </div>
    </motion.article>
)}