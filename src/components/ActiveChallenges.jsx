import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import ChallengeCard from './ChallengeCard';
import { Link } from 'react-router';
import useAxios from '../hooks/useAxios';
import DataLoader from './DataLoader';

const ActiveChallenges = () => {
    const [recentChallenges, setRecentChallenges] = useState([])
    const [loading,setLoading]=useState(true)
    const axiosInstance = useAxios()
    useEffect(() => {
        axiosInstance.get('/recent-challenges')
            .then(data => {
                setRecentChallenges(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [axiosInstance, setLoading])

    return (
        <section className='w-11/12 mx-auto'>
            <h2 className='section-heading'>Join Our Active Challenges Today</h2>
            {loading ? <DataLoader></DataLoader> : <><div className='ml-auto w-fit'><Link to='/challenges' className='btn btn-primary '>View All</Link></div>
                <Marquee pauseOnHover={true} className='py-5'>
                    {recentChallenges.map(challenge => <ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)}
                </Marquee></>}


        </section>
    );
};

export default ActiveChallenges;