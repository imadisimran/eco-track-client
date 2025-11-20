import React from 'react';
import Hero from '../components/Hero';
import ActiveChallenges from '../components/ActiveChallenges';
import RecentTips from '../components/RecentTips';


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <ActiveChallenges></ActiveChallenges>
            <RecentTips></RecentTips>
        </>
    );
};

export default Home;