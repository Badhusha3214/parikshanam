import Image from 'next/image'
import Navbar from '../components/navbar'
import WhyIAM from '../components/whyiam';
import IAMJourney from '../components/journey';
import CoreValues from '../components/corevalue';
import BlogArticle from '../components/blogarticle';
import { FooterSection } from '../components/footer';

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen mt-16 flex flex-col lg:flex-row relative px-4 sm:px-6 lg:px-0 pt-4 sm:pt-4 lg:px-0 pb sm:pb-[20px] lg:pb-[30px] xl:pb-[50px]">
                {/* Left Column */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 max-w-7xl mx-auto  lg:pl-8 xl:pl-20 py-0 lg:py-0">

                    <h2 className="text-large sm:text-th xl:text-elarge font-bold max-w-3xl leading-none">
                        <span className="text-gray-700">Pioneering Progress </span><span className="text-fontColor-heading">With every step.</span>
                    </h2>
                    <p className="text-normal text-fontColor-primary mt-8 mb-8 max-w-2xl">
                        Lacinia ornare magna penatibus adipiscing laoreet tempus.
                        Lacinia ornare magna penatibus adipiscing laoreet tempus.
                        Tortor praesent semper arcu facilisis class eget mauris lobortis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-brand px-6 lg:px-8 xl:px-10 py-3  font-medium text-fontColor-heading">Join Us</button>
                        <button className="border-2 border-fontColor-heading px-10 lg:px-12 xl:px-16 py-3  font-medium flex items-center justify-center sm:justify-start">
                            Our Industry Resources
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto relative mt-8 lg:mt-0">
                    <Image
                        src="/Replace.svg"
                        alt="About Hero"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* History Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="flex items-center h-[300px] sm:h-[400px] lg:h-[600px]">
                        <Image
                            src="/image 17.svg"
                            alt="Our Team"
                            width={1600}
                            height={1600}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-th font-bold mb-6 lg:mb-8 text-fontColor-heading">History Of IAM</h2>
                        <p className="text-normal text-fontColor-primary mb-8 leading-relaxed">
                            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent
                            semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae
                            velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate
                            sociosqu nibh.
                        </p>
                    </div>
                </div>
            </section>

            {/* Purpose, Journey, and Core Values sections */}
            <section >
                <WhyIAM className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
            </section>

            <section>
                <IAMJourney className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
            </section>

            <section className="py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
                <CoreValues className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
            </section>

            {/* Team Section */}
            <section className="py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-large sm:text-th text-center font-bold mb-6 text-fontColor-heading">Our Core team</h2>
                    <p className="text-center text-fontColor-primary text-normal sm:text-pch mb-12">
                        Lacinia ornare magna penatibus adipiscing laoreet tempus.<br className="hidden sm:block" />
                        Tortor praesent semper arcu facilisis class eget mauris
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { name: "James Patterson", role: "President", image: "/james.png" },
                            { name: "James Patterson", role: "President", image: "/james.png" },
                            { name: "James Patterson", role: "President", image: "/james.png" },
                            { name: "James Patterson", role: "President", image: "/james.png" },
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="relative h-64 sm:h-72">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                        <h3 className="font-bold text-lg text-white">{member.name}</h3>
                                        <p className="text-gray-200">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
                <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-large sm:text-th font-bold text-center mb-6 lg:mb-8 text-fontColor-heading">IAM Insights</h2>
                    <p className="text-center text-fontColor-primary mb-16 lg:mb-20 max-w-3xl mx-auto text-normal sm:text-pch">
                        Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ">
                        <StatBlock number="20%" title="Increased Recognitions" />
                        <StatBlock number="15%" title="More Networking" />
                        <StatBlock number="89%" title="Average ROI Return" />

                        <StatBlock number="250+" title="Satisfied Members" />
                        <StatBlock number="15+" title="Workshops Organised" />
                        <StatBlock number="30%" title="Increased Client Acquisition" />
                    </div>
                </div>
            </section>

            {/* Ready to Join Section */}   
            <section className="">
                <div className=" flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-xl py sm:py-[20px] lg:py-[30px] xl:py-[50px] px-6 sm:px-8 lg:px-12 text-center max-w-7xl w-full">
                        <h2 className="text-large sm:text-th xl:text-elarge font-bold mb-6 lg:mb-8 text-fontColor-heading">Ready to join?</h2>
                        <p className="text-fontColor-primary mb-8 lg:mb-12 max-w-3xl mx-auto text-normal sm:text-pch lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <button className="bg-brand px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-md text-lg sm:text-xl font-medium text-fontColor-heading hover:bg-fontColor-heading hover:text-brand">Sign Up</button>
                            <button className="bg-fontColor-heading text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-md text-lg sm:text-xl font-medium hover:border-2 hover:border-fontColor-heading hover:bg-white hover:text-fontColor-heading ">View Plans</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Articles Section */}
            <section>
                <BlogArticle />
            </section>

            {/* Footer */}
            <FooterSection />
        </main>
    )
}

// Helper component for stats
const StatBlock = ({ number, title }) => (
    <div className="text-center">
        <h3 className="text-large sm:text-th font-bold mb-4 text-fontColor-heading">{number}</h3>
        <h4 className="text-cdh font-semibold mb-4 text-fontColor-sub-heading">{title}</h4>
        <p className="text-normal text-fontColor-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    </div>
);