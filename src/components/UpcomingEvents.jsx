import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import useAxios from '../hooks/useAxios';


const UpcomingEvents = () => {
    const axiosInstance=useAxios()
    const [data,setData]=useState([])

    useEffect(()=>{
        axiosInstance('/events')
        .then(data=>{
            setData(data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[axiosInstance])

    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='section-heading'>Upcoming Events</h1>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}

                spaceBetween={20}
                // Default (Mobile / < 640px): 1 Slide
                slidesPerView={1}
                breakpoints={{
                    // Tailwind 'sm' (640px)
                    // User: "1 slide per view in small screen"
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // Tailwind 'md' (768px)
                    // User: "2 in medium"
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // Tailwind 'lg' (1024px)
                    // User: "3 in large"
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >

                {data.map(eventData=><SwiperSlide key={eventData._id} className='py-5'>
                    <EventCard eventData={eventData}></EventCard>
                </SwiperSlide>)}
            </Swiper>

        </section>
    );
};

export default UpcomingEvents;