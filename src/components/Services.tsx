import { Card3D, CardProps } from "./Card3D"
import Image from 'next/image';
import grass from "../../public/Grass.png"
import iphone from "../../public/iPhone.png"
export const Services = () => {
    const cardsArray: CardProps[] = [
        {
            title: "The future of Web3 on Bitcoin",
            color: "blue",
            tags: ["Branding", "Website", "App"],
        },
        {
            title: "Not ordinary app for not ordinary photos",
            color: "green",
            tags: ["Branding", "Website", "App"],
        },
        {
            title: "May the 4th be with you",
            color: "grey",
            tags: ["Branding", "Website", "App"],
        },
        {
            title: "Forgotten Wikipedia articles",
            color: "orange",
            tags: ["Branding", "Website", "App"],
        },
    ]
return (
    <section id="services" className="w-full flex flex-wrap gap-8 items-center justify-center">
        <Card3D title={"The future of Web3 on Bitcoin"} color={"blue"} tags={["Branding", "Website", "App"]} >
        </Card3D>

        <Card3D title={"Not ordinary app for not ordinary photos"} color={"green"} textColor="text-[var(--background)]" tags={["Branding", "Website", "App"]}>
            <Image className="absolute" src={grass} alt="grass" width={grass.width} height={grass.height} />
            <Image className="absolute top-[92px]" src={iphone} alt="grass" width={iphone.width} height={iphone.height} />
        </Card3D>

        <Card3D title={"May the 4th be with you"} color={"grey"} tags={["Branding", "Website", "App"]} >
            <Image className="absolute top-[92px]" src={iphone} alt="grass" width={iphone.width} height={iphone.height} />
        </Card3D>

        <Card3D title={"Forgotten Wikipedia articles"} color={"orange"} tags={["Branding", "Website", "App"]} >
        </Card3D>
    </section>
)}
