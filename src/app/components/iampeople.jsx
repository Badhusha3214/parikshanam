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
        <section className="py-12 md:py-20 bg-white text-black">
            <div className="text-center mb-12 px-4">
                <h2 className='text-2xl sm:text-4xl lg:text-6xl font-bold mt-6'>What People Say <span>About IAM</span></h2>
            </div>

            <div className="relative overflow-visible w-full">
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
                            <div className="bg-gray-50 text-black p-6 md:py-12 md:px-8 rounded-xl shadow-lg h-auto min-h-[400px] md:h-[500px] max-w-[450px] mx-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 md:w-24 md:h-24 rounded-lg mb-6 md:mb-8"
                                />
                                <p className="text-base md:text-xl mb-6 md:mb-8">{testimonial.quote}</p>
                                <div className="flex mb-4 md:mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl md:text-3xl">
                                            {i < testimonial.rating ? '⭐' : '☆'}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-bold text-xl md:text-3xl">{testimonial.name}</h3>
                                <p className="text-gray-400 text-sm md:text-base">{testimonial.role}</p>
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

                <div className="flex mt-4 md:mt-0 space-x-4">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-700 border-2 sm:border-2 border-black bg-opacity-0 p-2 sm:p-3 rounded-xl transition-colors"
                    >
                        <ChevronLeft className="text-black w-4 h-4 sm:w-10 sm:h-10" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-700 border-2 sm:border-2 border-black bg-opacity-0 p-2 sm:p-3 rounded-xl transition-colors"
                    >
                        <ChevronRight className="text-black w-4 h-4 sm:w-10 sm:h-10" />
                    </button>
                </div>
            </div>
        </section>
    )
}

