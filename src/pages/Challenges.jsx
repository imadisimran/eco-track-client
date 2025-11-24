import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ChallengeCard from '../components/ChallengeCard';
import CreateChallengeModal from '../components/CreateChallengeModal';
import useAxios from '../hooks/useAxios';

const Challenges = () => {
    const data = useLoaderData()
    const [challenges, setChallenges] = useState(data)
    const [categories,setCategories]=useState([])
    const axiosInstance=useAxios()
    useEffect(()=>{
        axiosInstance.get('/getCategories')
        .then(result=>{
            setCategories(result.data)
        })
    },[axiosInstance])

    const [selected,setSelected]=useState([])

    const toogleCategory=category=>{
        if(selected.includes(category)){
            const newSelected=selected.filter(item=>item!==category)
            setSelected(newSelected)
        }
        else{
            const newSelected=[...selected,category]
            setSelected(newSelected)
        }
    }

    console.log(selected)

    return (
        <section className='w-11/12 mx-auto  mt-20'>
            <div className='flex justify-between'>
                <CreateChallengeModal challenges={challenges} setChallenges={setChallenges}></CreateChallengeModal>
                <div className='pr-5'>
                    <details className="dropdown">
                        <summary className="btn m-1">Categories</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {categories.map(c=><li className={selected.includes(c._id) && 'bg-base-200'} onClick={()=>toogleCategory(c._id)} key={c._id}><a>{c._id}</a></li>)}
                        </ul>
                    </details>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {challenges.map(challenge => <ChallengeCard challenge={challenge} key={challenge?._id}></ChallengeCard>)}
            </div>
        </section>
    );
};

export default Challenges;