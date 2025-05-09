import { Card3D, CardProps  } from "./Card3D"
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
    <section id="services" className="w-full max-w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-8">
        {cardsArray.map((card, index) => (
            <Card3D key={index} title={card.title} color={card.color} tags={card.tags} />
        ))}
    </section>
)}
