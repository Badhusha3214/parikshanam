'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css'

const testimonials = [
    {
        name: 'Makise Kurisu',
        role: 'Mercks Product Designer',
        image: '/pp1.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Gerard Heart',
        role: 'Doctor & Health Enthusiast',
        image: '/pp2.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Kaori Miyazono',
        role: 'Biopharma CEO',
        image: '/pp1.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Makise Kurisu',
        role: 'Mercks Product Designer',
        image: '/pp1.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Gerard Heart',
        role: 'Doctor & Health Enthusiast',
        image: '/pp2.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Kaori Miyazono',
        role: 'Biopharma CEO',
        image: '/pp1.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    },
    {
        name: 'Daniel Smolensk',
        role: 'Cardiologist',
        image: '/pp1.svg',
        quote: 'IAM has truly changed the way I approach my ads. Their amazing personalized Mentorings are not only accurate but also incredibly, awesomely insightful.',
        rating: 4
    }
];

export default function IamPeople() {
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
        <section className="bg-white text-black py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
            <div className="text-center mb-12 px-4">
                <h2 className='text-ph sm:text-th lg:text-th xl:text-large font-bold mt-6'>What People Say <span>About IAM</span></h2>
            <p className="text-gray-700 text-pn mt-2 sm:text-tn md:text-normal text-center max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <div className="relative overflow-visible w-full ">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 25,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    className="w-full px-4 md:px-8"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                        <div className="bg-gray-50 text-black p-6 md:py-8 md:px-8 rounded-xl shadow-lg h-full min-h-[400px] md:min-h-[500px] max-w-[450px] mx-auto my-[20px] flex flex-col">
                            <div className="flex-shrink-0">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-lg"
                                />
                            </div>
                            <div className="flex-grow flex flex-col justify-between mt-6 md:mt-8">
                                <div>
                                    <p className="text-pn sm:text-tn md:text-normal line-clamp-6">{testimonial.quote}</p>
                                    <div className="flex mt-4 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-2xl md:text-3xl">
                                                {i < testimonial.rating ? '⭐' : '☆'}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="font-bold text-cdh sm:text-pch md:text-cdh truncate">{testimonial.name}</h3>
                                    <p className="text-gray-400 text-pn sm:text-tn md:text-normal truncate">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12 px-4 md:px-20">
                <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-0 overflow-x-auto w-full sm:w-auto">
                    {testimonials.slice(0, 4).map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-12 sm:w-16 md:w-40 transition-colors ${index === activeIndex ? 'bg-yellow-400' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <div className="flex mt-4 md:mt-0 space-x-2 px">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-700 border-[1px] md:border-2 border-black bg-opacity-0 p-4 sm:p-3 rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                        <ChevronLeft className="text-black w-4 h-4 sm:w-10 sm:h-10" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-700 border-[1px] md:border-2 border-black bg-opacity-0 p-4 sm:p-3 rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                        <ChevronRight className="text-black w-4 h-4 sm:w-10 sm:h-10" />
                    </button>
                </div>
            </div>
        </section>
    )
}

