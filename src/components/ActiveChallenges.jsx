import React from 'react';
import Marquee from 'react-fast-marquee';
import ChallengeCard from './ChallengeCard';
import { Link } from 'react-router';

const ActiveChallenges = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <h2 className='section-heading'>Join Our Active Challenges Today</h2>
            <div className='ml-auto w-fit'><Link to='/challenges' className='btn btn-primary '>View All</Link></div>
            <Marquee pauseOnHover={true} className='py-5'>
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
            </Marquee>

        </section>
    );
};

export default ActiveChallenges;