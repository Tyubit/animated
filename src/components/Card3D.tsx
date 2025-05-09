import { MouseEventHandler } from "react";


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
    tags?: string[],
    onClickEvent?: MouseEventHandler<HTMLDivElement>,
}

export const Card3D: React.FC<CardProps> = ({ title, tags = [], color, onClickEvent }) => {
    const randomColor = () => {
        const values = Object.values(colorMap);
        return values[Math.floor(Math.random() * values.length)];
    };
    const bgColor = color ? colorMap[color] : randomColor();
return (
    <div className={`w-full max-w-[708px] aspect-square overflow-hidden relative bg-[${bgColor}]`}>
        <h3 className='text-[32px]'>{title}</h3>
        <div className="flex">
            {tags.map((tag, index) => (<span key={index}>{tag}</span>))}
        </div>
    </div>
)}
