import React from 'react';
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

const Hero = () => {
    return (
        <div className="h-auto md:h-120 w-full">
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
                            <div className="card bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        20 Million Ton CO<sub>2</sub>Emission Reduced
                                    </h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">Join Us Today</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        20 Million Ton CO<sub>2</sub>Emission Reduced
                                    </h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">Join Us Today</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-200 card-md shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        20 Million Ton CO<sub>2</sub>Emission Reduced
                                    </h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">Join Us Today</button>
                                    </div>
                                </div>
                            </div>

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
        </div>
    );
};

export default Hero;