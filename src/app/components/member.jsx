import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';

// Define the perks data
const perks = [
    {
        id: 1,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Networking Opportunities',
        description: 'Connect with professionals across industries'
    },
    {
        id: 2,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Professional Development',
        description: 'Access exclusive workshops and training'
    },
    {
        id: 3,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Mentorship',
        description: 'Learn from experienced industry leaders'
    },
    {
        id: 4,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Career Resources',
        description: 'Job boards and career guidance'
    },
    {
        id: 5,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Exclusive Events',
        description: 'Attend members-only networking events'
    },
    {
        id: 6,
        image: '/perks1.svg',
        logo: '/wifi.svg',
        title: 'Professional Development',
        description: 'Continuous learning opportunities'
    },
    {
        id: 7,
        image: '/perks1.svg',
        logo: '/wifi.svg',
        title: 'Social Impact',
        description: 'Make a difference in your community'
    },
    {
        id: 8,
        image: '/',
        logo: '/wifi.svg',
        title: 'Exclusive Perks',
        description: 'Special benefits for members'
    }
];

const IAMMemberPerks = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <main className="w-full px-2 sm:px-4 md:px-6 lg:px-10 py-4 md:py-8">
            <div className="bg-[#121212] text-white p-4 sm:p-6 md:p-10 lg:py-20 lg:pl-20">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-10">
                    <h1 className="text-ph sm:text-th lg:text-mid xl:text-large font-bold mb-4 sm:mb-0 leading-tight">
                        IAM Member <br className="hidden sm:block" /> Perks & Benefits
                    </h1>
                    <span className="text-pn sm:text-tn md:text-normal border-2 border-white rounded-xl px-3 py-1 sm:px-4 sm:py-2">
                        {perks.length} Total Benefits
                    </span>
                </div>

                <div className="relative overflow-hidden w-full">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                        className="w-full"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {perks.map((perk) => (
                            <SwiperSlide key={perk.id} className="pb-4">
                                <div
                                    className="w-full aspect-square rounded-xl relative overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(${perk.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 border-2 border-white p-2 sm:p-3 rounded-xl">
                                        <img 
                                            src={perk.logo} 
                                            alt={`${perk.title} logo`}
                                            className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                                        <h2 className="text-cdh sm:text-pch md:text-cdh font-bold text-white">{perk.title}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 md:mt-10">
                    <div className="flex items-center space-x-2 mb-4 sm:mb-0 w-full sm:w-auto">
                        <div className="flex space-x-1 sm:ml-20 sm:space-x-2 w-full sm:w-auto justify-center sm:justify-start">
                            {perks.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 w-4 sm:w-8 md:w-12 xl:w-20 transition-colors ${
                                        index === activeIndex ? 'bg-yellow-400' : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4 lg:mr-20">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-700 border-[1px] md:border-2 border-white bg-opacity-0 p-2 sm:p-3 rounded-xl hover:bg-yellow-600 transition-colors"
                        >
                            <ChevronLeft className="text-white w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-700 border-[1px] md:border-2 border-white bg-opacity-0 p-2 sm:p-3 rounded-xl hover:bg-yellow-600 transition-colors"
                        >
                            <ChevronRight className="text-white w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default IAMMemberPerks;

