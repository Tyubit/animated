import { MouseEventHandler } from "react";
import { GoArrowRight } from "react-icons/go";

interface ButtonProps{
    text: string;
    style?: string;
    disabled?: boolean;
    onClickEvent?: MouseEventHandler;
}
export const Button : React.FC<ButtonProps> = ({ text, style }) => {
return (
<button className={`bg-[var(--foreground)] text-[var(--background)] h-14 flex items-center justify-center rounded-full py-6 px-8 ${style}`}>
        {text}
        <GoArrowRight className="ml-3"/>
</button>
)
}

interface TextButtonProps extends ButtonProps {
    hoverText?: string;
}

export const TextButton:  React.FC<TextButtonProps> = ({ text, hoverText, onClickEvent }) => {
return (
    <button className="relative overflow-hidden cursor-pointer block group" onClick={onClickEvent}>
        <span className={"block transition-transform duration-500 group-hover:-translate-y-full"}>
            {text}
        </span>
        <span className="absolute top-0 left-0 w-full h-full transition-transform duration-500 translate-y-full group-hover:translate-y-0">
            {hoverText || text}
        </span>
    </button>
)}