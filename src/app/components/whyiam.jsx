'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WhyIAM = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Check initial screen width
        checkScreenWidth();

        // Add event listener to check screen width on resize
        window.addEventListener('resize', checkScreenWidth);

        // Ensure we're on the client side
        setIsClient(true);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <main className="px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-24 lg:py-32 xl:py-32">
            <div className="text-center mb-10 sm:mb-5 md:mb-16 lg:mb-20">
                <span className='text-psh sm:text-tsh md:text-normal lg:text-normal xl:text-normal border-2 border-gray-400  px-4 py-2 sm:px-6 sm:py-3 rounded-xl inline-block'>
                    Why IAM?
                </span>
                <h1 className='text-ph sm:text-th md:text-th lg:text-large xl:text-large font-bold mt-6 sm:mt-2 md:mt-8 sm:mt-8'>
                    Our <span className="text-primary">Purpose</span>
                </h1>
            </div>

            <div className={`grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full`}>
                {/* Mission Card */}
                <div className={`bg-yellow-400 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg 
                    transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl flex flex-col`}>
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <Image
                            src="/mission.svg"
                            alt="Mission"
                            width={64}
                            height={64}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-pch sm:text-cdh md:text-cdh     font-bold text-center mb-4">
                        Our Mission
                    </h3>
                    <p className="text-pn sm:text-tn md:text-normal xl:tet-normal text-center flex-grow">
                        Empowering innovation through strategic insights and transformative solutions that drive meaningful change. We are committed to pushing boundaries, fostering creativity, and delivering exceptional value to our clients and partners.
                    </p>
                </div>

                {/* Vision Card */}
                <div className={`bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg 
                    transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl flex flex-col`}>
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <Image
                            src="/vision.svg"
                            alt="Vision"
                            width={64}
                            height={64}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-pch sm:text-cdh md:text-cdh  font-bold text-center mb-4">
                        Our Vision
                    </h3>
                    <p className="text-pn sm:text-tn md:text-normal xl:tet-normal text-center flex-grow">
                        To be a global catalyst for transformative change, pioneering innovative solutions that inspire progress, drive sustainable growth, and create lasting impact across industries and communities.
                    </p>
                </div>

                {/* Motto Card */}
                <div className={`bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg 
                    transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl flex flex-col`}>
                    <div className="mb-4 sm:mb-6 flex justify-center">
                        <Image
                            src="/motto.svg"
                            alt="Motto"
                            width={64}
                            height={64}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-pch sm:text-cdh md:text-cdh  font-bold text-center mb-4">
                        Our Motto
                    </h3>
                    <p className="text-pn sm:text-tn md:text-normal xl:tet-normal text-center flex-grow">
                        Innovate, Adapt, Motivate - Our core philosophy centers on continuous learning, collaborative excellence, and driving transformative solutions that make a meaningful difference.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default WhyIAM;