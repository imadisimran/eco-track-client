import React from 'react';
import Hero from '../components/Hero';
import ActiveChallenges from '../components/ActiveChallenges';
import RecentTips from '../components/RecentTips';
import UpcomingEvents from '../components/UpcomingEvents';
import GoGreen from '../components/GoGreen';


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <ActiveChallenges></ActiveChallenges>
            <RecentTips></RecentTips>
            <UpcomingEvents></UpcomingEvents>
            <GoGreen></GoGreen>
        </>
    );
};

export default Home;