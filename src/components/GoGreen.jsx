import React from 'react';
import tree from '../assets/tree.jpg'

const GoGreen = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='section-heading'>Go Green With Us</h1>
            <div className='flex flex-col md:flex-row gap-20 items-center'>
                <div>
                    <img className='rounded-xl' src={tree} alt="" />
                </div>
                <ul className='list-disc text-base/loose pl-5'>
                    <li><b>Reduces your carbon footprint</b> and limits your impact on climate change.</li>
                    <li><b>Saves money</b> in the long run through lower utility bills (energy, water) and less consumption.</li>
                    <li><b>Promotes better health</b> by increasing consumption of whole, local foods and reducing exposure to pollutants.</li>
                    <li><b>Conserves natural resources</b> for future generations by using less and reusing more.</li>
                    <li><b>Supports local and ethical businesses</b> that are committed to sustainable practices.</li>
                    <li><b>Improves the quality of air and water</b> in your community.</li>
                    <li><b>Creates a stronger sense of community</b> through shared practices like gardening and local events.</li>
                </ul>
            </div>
        </section>
    );
};

export default GoGreen;