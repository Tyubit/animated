import { MouseEventHandler,ReactNode } from "react";


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

export const Card3D: React.FC<CardProps> = ({ title, tags = [], color, textColor, children, onClickEvent }) => {
    const randomColor = () => {
        const values = Object.values(colorMap);
        return values[Math.floor(Math.random() * values.length)];
    };
    const bgColor = color ? colorMap[color] : randomColor();
return (
    <article className={`w-full max-w-[708px] aspect-square overflow-hidden relative bg-[${bgColor}] rounded-4xl flex flex-col items-center`}>
        {children}
        <div className="flex flex-col items-center justify-end h-full z-10 mb-8">
            <h2 className={`text-[32px] ${textColor ?? "text-[var(--foreground)]"}`}>{title}</h2>
            <ul className="flex gap-2 mt-2.5">
                {tags.map((tag, index) => (<li className=" bg-[var(--background)] text-[var(--foreground)] rounded-full py-2 px-4" key={index}>{tag}</li>))}
            </ul>
        </div>
    </article>
)}