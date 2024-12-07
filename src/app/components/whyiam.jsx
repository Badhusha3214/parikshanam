import Image from 'next/image';

const WhyIAM = () => {
    return (
        <main className="px-4 py-16 md:py-24 lg:px-24">
            <div className="text-center mb-16">
                <span className='text-xl border-2 border-gray-400 font-bold px-8 py-3 rounded-xl inline-block'>Why IAM?</span>
                <h1 className='text-7xl font-bold mt-8'>Our <span>Purpose</span></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:mb-48 md:px-10 gap-10 w-full">
                <div className="bg-yellow-400 p-8 md:p-12 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-6">
                        <Image
                            src="/mission.svg"
                            alt="Mission"
                            width={80}
                            height={80}
                            className="w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mt-12 mb-4">Our Mission</h3>
                    <p className="text-xl md:text-2xl">
                        Empowering innovation through strategic insights and transformative solutions that drive meaningful change. We are committed to pushing boundaries, fostering creativity, and delivering exceptional value to our clients and partners.
                    </p>
                </div>

                <div className="bg-black text-white p-8 md:p-12 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-6">
                        <Image
                            src="/vision.svg"
                            alt="Vision"
                            width={80}
                            height={80}
                            className="w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mt-12 mb-4">Our Vision</h3>
                    <p className="text-xl md:text-2xl">
                        To be a global catalyst for transformative change, pioneering innovative solutions that inspire progress, drive sustainable growth, and create lasting impact across industries and communities.
                    </p>
                </div>

                <div className="bg-black text-white p-8 md:p-12 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="mb-6">
                        <Image
                            src="/motto.svg"
                            alt="Motto"
                            width={80}
                            height={80}
                            className="w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mt-12 mb-4">Our Motto</h3>
                    <p className="text-xl md:text-2xl">
                        Innovate, Adapt, Motivate - Our core philosophy centers on continuous learning, collaborative excellence, and driving transformative solutions that make a meaningful difference.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default WhyIAM;
