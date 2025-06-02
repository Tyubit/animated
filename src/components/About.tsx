import React from 'react'
import { PeopleCard } from './PeopleCard'

export const About = () => {
return (
    <section className='mt-56'>
        <header className='flex flex-col items-center pb-24'>
            <h4 className='font-bold'>Since 2017</h4>
            <p className='font-serif text-[18px]'>We are award winning design studio</p>
        </header>
        <h1 className="uppercase text-[170px] font-bold text-center leading-[0.9] tracking-tighter pb-24">From<br/>London, UK.</h1>
        <p className='text-[64px] font-serif text-center'>We hold the conviction that excellent design<br />transcends mere appearance — it serves as a vital<br />medium for communication and engagement.</p>

        <div>
            <PeopleCard/>
        </div>
    </section>
)
}
