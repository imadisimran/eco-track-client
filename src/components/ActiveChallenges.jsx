import React from 'react';
import Marquee from 'react-fast-marquee';
import ChallengeCard from './ChallengeCard';

const ActiveChallenges = () => {
    return (
        <section className='w-11/12 mx-auto'>
            <Marquee pauseOnHover={true} >
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
                <ChallengeCard></ChallengeCard>
            </Marquee>
        </section>
    );
};

export default ActiveChallenges;