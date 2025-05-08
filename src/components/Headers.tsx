import { TextButton } from "./Buttons"
export const Header = () => {
return (
<header className="w-[245px] bg-[rgba(28,28,28,0.8)]  items-center justify-center mt-[48] py-[16] px-[32] rounded-full text-sm">
    <ul className="list-none flex justify-center items-center gap-[24px]">
        <li><TextButton text="Work"/></li>
        <li><TextButton text="About"/></li>
        <li><TextButton text="Contact"/></li>
    </ul>
</header>
)}
