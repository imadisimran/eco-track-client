import React from 'react';
import Hero from '../components/Hero';
import ActiveChallenges from '../components/ActiveChallenges';
import RecentTips from '../components/RecentTips';
import UpcomingEvents from '../components/UpcomingEvents';
import GoGreen from '../components/GoGreen';
import HowItWorks from '../components/HowItWorks';


const Home = () => {
    return (
        <>
            <Hero></Hero>
            <ActiveChallenges></ActiveChallenges>
            <RecentTips></RecentTips>
            <UpcomingEvents></UpcomingEvents>
            <GoGreen></GoGreen>
            <HowItWorks></HowItWorks>
        </>
    );
};

export default Home;