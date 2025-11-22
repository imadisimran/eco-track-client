import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ChallengeCard from '../components/ChallengeCard';
import CreateChallengeModal from '../components/CreateChallengeModal';

const Challenges = () => {
    const data = useLoaderData()
    const [challenges,setChallenges]=useState(data)
    return (
        <section className='w-11/12 mx-auto  mt-20'>
            <CreateChallengeModal challenges={challenges} setChallenges={setChallenges}></CreateChallengeModal>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {challenges.map(challenge => <ChallengeCard challenge={challenge} key={challenge?._id}></ChallengeCard>)}
            </div>
        </section>
    );
};

export default Challenges;