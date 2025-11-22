import React from 'react';
import { useLoaderData } from 'react-router';
import ChallengeCard from '../components/ChallengeCard';

const Challenges = () => {
    const challenges = useLoaderData()
    return (
        <section className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
            {challenges.map(challenge => <ChallengeCard challenge={challenge} key={challenge?._id}></ChallengeCard>)}
        </section>
    );
};

export default Challenges;