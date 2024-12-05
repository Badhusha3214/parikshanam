import Image from 'next/image';

const WhyIAM = () => {
    return (
        <main className="px-4 py-12 md:py-16 lg:px-16">
            <div className="text-center mb-12">
                <span className='text-lg border-2 border-gray-400 font-bold px-6 py-2 rounded-xl inline-block'>Why IAM?</span>
                <h1 className='text-6xl font-bold mt-6'>Our <span>Purpose</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:mb-40 md:px-16 gap-8 w-full">
                <div className="bg-yellow-400 p-6 md:p-8  rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-4">
                        <Image
                            src="/mission.svg"
                            alt="Mission"
                            width={60}
                            height={60}
                            className="w-14 h-14 md:w-16 md:h-16"
                        />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mt-10 mb-3">Our Mission</h3>
                    <p className="text-sm md:text-base">
                        Empowering innovation through strategic insights and transformative solutions that drive meaningful change. We are committed to pushing boundaries, fostering creativity, and delivering exceptional value to our clients and partners.
                    </p>
                </div>

                <div className="bg-black text-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-4">
                        <Image
                            src="/vision.svg"
                            alt="Vision"
                            width={60}
                            height={60}
                            className="w-14 h-14 md:w-16 md:h-16"
                        />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mt-10 mb-3">Our Vision</h3>
                    <p className="text-sm md:text-base">
                        To be a global catalyst for transformative change, pioneering innovative solutions that inspire progress, drive sustainable growth, and create lasting impact across industries and communities.
                    </p>
                </div>

                <div className="bg-black text-white p-6 md:p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-4">
                        <Image
                            src="/motto.svg"
                            alt="Motto"
                            width={60}
                            height={60}
                            className="w-14 h-14 md:w-16 md:h-16"
                        />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Our Motto</h3>
                    <p className="text-sm md:text-base">
                        Innovate, Adapt, Motivate - Our core philosophy centers on continuous learning, collaborative excellence, and driving transformative solutions that make a meaningful difference.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default WhyIAM;
