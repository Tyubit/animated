import { Button } from "./Buttons"
export const Hero = () => {
return (
    <section >
        <div className="w-full p-[180] flex flex-col items-center relative">
            <div className="flex gap-1">
                <h1 className="font-serif text-9xl italic ">the</h1>
                <h1 className="text-9xl tracking-tight">INSTRUMENT</h1>
            </div>
            <div className="flex gap-1">
                <h1 className="text-9xl tracking-tight">DESIGN</h1>
                <h1 className="font-serif text-9xl italic">studio</h1>
            </div>
            <div className="self-end flex flex-col items-start mt-10 mr-20">
                <p className="w-[365] text-justify">The Instrument's a fresh design studio vibing out of London. We'll hook you up with killer branding, turn your design dreams into reality, and build a dope websites.</p>
                <Button text="Work with us" style="mt-10"/>
            </div>
            <div
            className="absolute w-[200px] h-[270px] top-[330px] left-[calc(50%-100px-128px)] bg-[url(https://i.pinimg.com/736x/a6/0b/b6/a60bb6070a21a4f854f222145db8ccb2.jpg)] bg-cover bg-center transform rotate-[-30deg] skew-y-6 scale-100"
            ></div>
        </div>
    </section>
)}
