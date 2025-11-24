import React, { useEffect, useState } from 'react';
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import useAxios from '../hooks/useAxios';

const Hero = () => {

    const axiosInstance=useAxios()
    const [impactData,setImpactData]=useState([])

    useEffect(()=>{
        axiosInstance.get('/impacts')
        .then(data=>{
            setImpactData(data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[axiosInstance])

    return (
        <section className="h-auto md:h-120 w-full">
            <Swiper
                style={{
                    '--swiper-navigation-color': '#00C853',
                    '--swiper-pagination-color': '#00C853',
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide className='h-auto! flex'>
                    <div className='w-full flex flex-col justify-center items-center h-full gap-y-5 bg-cover bg-no-repeat bg-center py-20' style={{ backgroundImage: `url(${hero1})` }}>
                        {/* Dynamic part  */}
                        <h1 className='text-center text-5xl/relaxed font-bold max-w-[700px] text-primary-content'>Already <span className='text-primary!'>30</span> Challenge Taken To Save The Environment All Over The World</h1>
                        <Link to='/challenges' className='btn btn-primary'>View All Running Challenges</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='h-auto! flex'>
                    <div className='w-full bg-cover bg-no-repeat bg-center h-full py-20' style={{ backgroundImage: `url(${hero2})` }}>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto items-center h-full  gap-5' >
                            {/* Dynamic Part */}
                            {impactData.map(data=><div key={data._id} className="card bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {data.title}-<span className='text-2xl'>{data.value}</span>
                                    </h2>
                                    <p>{data.description}</p>
                                    <div className="justify-end card-actions">
                                        <Link to='/challenges' className="btn btn-primary">Join Us Today</Link>
                                    </div>
                                </div>
                            </div>)}

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide className='h-auto! flex'>

                    <div className='flex w-full flex-col justify-center items-center h-full gap-y-5 bg-cover bg-no-repeat bg-center py-20' style={{ backgroundImage: `url(${hero1})` }}>
                        <h1 className='text-center text-5xl/relaxed font-bold max-w-[700px] text-primary-content'>Taking New Steps Everyday To Save Then Nature</h1>
                        <Link to='/challenges' className='btn btn-primary'>Donate Us</Link>
                    </div>

                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;