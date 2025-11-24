import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecentTipsCard from './RecentTipsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import useAxios from '../hooks/useAxios';
import DataLoader from './DataLoader';

const RecentTips = () => {
    const [data, setData] = useState([])
    const axiosInstance = useAxios()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosInstance.get('/recent-tips')
            .then(data => {
                setData(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [axiosInstance])

    return (
        <section className='w-11/12 mx-auto'>
            <h1 className='section-heading'>Recent Tips From Our Community</h1>
            {loading ? <DataLoader message={'New Tips About To Come'}></DataLoader> : <StyledWrapper>
                <div className="cards">
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
                        modules={[Autoplay, Navigation]}

                        spaceBetween={10}
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
                        {data.map(post => <SwiperSlide key={post._id} className='p-5'>
                            <div className="card">
                                <RecentTipsCard post={post}></RecentTipsCard>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </StyledWrapper>}
            {/* <div className='ml-auto w-fit'><Link to='/challenges' className='btn btn-primary'>View All</Link></div> */}


        </section>
    );
};


const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: row;
  }

  .cards .card {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    // text-align: center;
    // height: 100px;
    // width: 250px;
    // border-radius: 10px;
    // color: white;
    cursor: pointer;
    transition: 400ms;
  }


    .cards .card:hover {
        transform: scale(1.1);
}
.cards:has(.card:hover) .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9);
}

    `;

export default RecentTips;