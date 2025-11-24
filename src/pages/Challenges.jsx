import React, { useEffect, useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import CreateChallengeModal from '../components/CreateChallengeModal';
import useAxios from '../hooks/useAxios';
// import { isBefore, parseISO } from 'date-fns';

const Challenges = () => {
    // const data = useLoaderData()
    const [challenges, setChallenges] = useState([])
    const [categories, setCategories] = useState([])
    const axiosInstance = useAxios()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    useEffect(() => {
        axiosInstance.get('/getCategories')
            .then(result => {
                setCategories(result.data)
            })
    }, [axiosInstance])

    const [selected, setSelected] = useState([])

    const toogleCategory = category => {
        if (selected.includes(category)) {
            const newSelected = selected.filter(item => item !== category)
            setSelected(newSelected)
        }
        else {
            const newSelected = [...selected, category]
            setSelected(newSelected)
        }
    }

    useEffect(() => {
        axiosInstance.get(`/challenges?categories=${selected.join(',')}&startDate=${startDate}&endDate=${endDate}`)
            .then(result => {
                setChallenges(result.data)
            })
    }, [axiosInstance, endDate, selected, startDate])


    // console.log(selected)


    // const handleDateFilter=(e)=>{
    //     const startDate=e.currentTarget.startDate.value
    //     const endDate=e.currentTarget.endDate.value
    //     if(!startDate || !endDate){
    //         return
    //     }
    //     const starDateIso=parseISO(startDate)
    //     const endDateIso=parseISO(endDate)
    //     if(isBefore(startDate,endDate)){
    //         axiosInstance.get()
    //     }
    // }

    return (
        <section className='w-11/12 mx-auto  mt-20'>
            <div className='flex justify-between items-center'>
                <CreateChallengeModal challenges={challenges} setChallenges={setChallenges}></CreateChallengeModal>
                <div className='pr-5'>
                    <details className="dropdown">
                        <summary className="btn m-1">Categories</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {categories.map(c => <li className={selected.includes(c._id) ? 'bg-base-200' : ''} onClick={() => toogleCategory(c._id)} key={c._id}><a>{c._id}</a></li>)}
                        </ul>
                    </details>
                    <div>
                        From <input onChange={(e) => setStartDate(e.target.value)} name='startDate' type="date" className='input' /><br />
                        To <input onChange={(e) => setEndDate(e.target.value)} name='endDate' type="date" className='input' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {challenges.map(challenge => <ChallengeCard challenge={challenge} key={challenge?._id}></ChallengeCard>)}
            </div>
        </section>
    );
};

export default Challenges;