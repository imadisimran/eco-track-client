import React from 'react';
import Hero from '../components/Hero';
import ActiveChallenges from '../components/ActiveChallenges';
import RecentTips from '../components/RecentTips';
import UpcomingEvents from '../components/UpcomingEvents';


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <ActiveChallenges></ActiveChallenges>
            <RecentTips></RecentTips>
            <UpcomingEvents></UpcomingEvents>
        </>
    );
};

export default Home;