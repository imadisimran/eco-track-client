import React from 'react';
import HowItWorksCard from './HowItWorksCard';

const HowItWorks = () => {
    return (
        <section className='mx-auto w-11/12'>
            <h1 className='section-heading'>How It Works</h1>
            <div className='grid md:grid-cols-3 gap-10 grid-cols-1 '>
                <HowItWorksCard heading={'Join'} description={'Discover a wide range of sustainability challenges—from plastic reduction to energy saving. Select a challenge that resonates with you and tap "Join" to instantly become a participant and commit to a greener lifestyle.'} title={'Join a Challenge'}></HowItWorksCard>
                <HowItWorksCard heading={'Track'} description={'Use your personalized dashboard to log your activities and track your measurable environmental impact, such as total CO₂ saved or kg of plastic reduced. Watch your progress grow and celebrate milestones with the community.'} title={'Track Progress'}></HowItWorksCard>
                <HowItWorksCard heading={'Share'} description={'Contribute to the collective knowledge by sharing your practical eco-tips and sustainable hacks with other members. Upvote the best advice, engage in discussions, and help inspire others on their journey toward sustainable living.'} title={'Share Tips'}></HowItWorksCard>
            </div>

        </section>
    );
};

export default HowItWorks;