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
    },
    {
        id: 2,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: '2 Networking Opportunities',
    },
    {
        id: 3,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: '3 Networking Opportunities',
    },
    {
        id: 4,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: '4 Networking Opportunities',
    },
    {
        id: 5,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: '5 Networking Opportunities',
    },
    {
        id: 6,
        image: '/perks1.svg',
        logo: '/wifiw.svg',
        title: 'Professional Development',
    },
    {
        id: 7,
        image: '/perks1.svg',
        logo: '/wifi.svg',
        title: 'Social Impact',
    },
    {
        id: 8,
        image: '/exclusive.jpg',
        logo: '/wifi.svg',
        title: 'Exclusive Perks',
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

    const getRealIndex = (index) => {
        if (!swiperRef.current) return 0;
        return swiperRef.current.swiper.realIndex;
    };


    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <main className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10 pb-12 md:pb-20">
            <div className="bg-[#121212] text-white p-6 sm:p-10 lg:p-16">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-0">
                        IAM Member <br className="hidden sm:block" /> Perks & Benefits
                    </h1>
                    <span className="text-sm sm:text-lg">{perks.length} Total Benefits</span>
                </div>

                <div className="relative overflow-hidden w-full">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            }
                        }}
                        className="w-full"
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex instead
                    >
                        {perks.map((perk) => (
                            <SwiperSlide key={perk.id}>
                                <div
                                    className="flex-none w-full aspect-square rounded-xl relative overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(${perk.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/200 to-transparent" />

                                    <div className="absolute top-4 left-4 border-2 border-white p-4 rounded-xl">
                                        <img 
                                            src={perk.logo} 
                                            alt=""
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                        <h2 className="text-xl sm:text-2xl font-bold text-white">{perk.title}</h2>
                                        <p className="text-xs sm:text-md text-gray-100 mt-1 sm:mt-2">{perk.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <div className="flex space-x-2">
                            {perks.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 w-4 sm:w-8 transition-colors ${index === activeIndex ? 'bg-yellow-400' : 'bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4 sm:space-x-8">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-700 border-4 border-white bg-opacity-0 p-3 sm:p-6 rounded-xl hover:bg-yellow-600 transition-colors"
                        >
                            <ChevronLeft className="text-white w-5 h-5 sm:w-8 sm:h-8" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-gray-700 border-4 border-white bg-opacity-0 p-3 sm:p-6 rounded-xl hover:bg-yellow-600 transition-colors"
                        >
                            <ChevronRight className="text-white w-5 h-5 sm:w-8 sm:h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default IAMMemberPerks;