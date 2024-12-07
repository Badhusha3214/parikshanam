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
            <div className="min-h-screen flex relative">
                {/* Left Column */}
                <div className=" flex flex-col justify-center max-w-7xl mx-auto pl-20">
                    <h1 className="text-8xl font-bold text-gray-700 mb-4">Pioneering Progress.</h1>
                    <h2 className="text-8xl font-bold text-black mb-8">With every step.</h2>
                    <p className="text-gray-600 mb-8">
                        Lacinia ornare magna penatibus adipiscing laoreet tempus.
                        Lacinia ornare magna penatibus adipiscing laoreet tempus.<br></br>

                        Tortor praesent semper arcu facilisis class eget mauris
                        lobortis.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-yellow-400 px-6 py-3 rounded-md font-medium">Join Us</button>
                        <button className="border-2 border-black px-6 py-3 rounded-md font-medium flex items-center">
                            Our Industry Resources
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <Image
                        src="/replace.svg"
                        alt="About Hero"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>



            {/* History Section */}
            <div className="min-h-screen max-w-7xl mx-auto px-8 flex items-center">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex items-center h-[600px]">
                        <Image
                            src="/image 17.svg"
                            alt="Our Team"
                            width={1600}
                            height={1600}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-8">History Of IAM</h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent
                            semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae
                            velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate
                            sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti
                            parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem.
                            Vel per condimentum sit interdum aenean quis.Lacinia ornare magna
                            penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis
                            class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus
                            et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui
                            aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra
                            pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit
                            interdum aenean.
                        </p>
                    </div>
                </div>
            </div>

            {/* Purpose Section */}
            <WhyIAM />


            {/* Journey Timeline */}
            <IAMJourney />

            {/* Core Values */}
            <CoreValues />

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="text-6xl text-center font-bold mb-8">Our Core team</h2>
                <p className="text-center text-gray-600 text-xl mb-12">
                    Lacinia ornare magna penatibus adipiscing laoreet tempus.<br />
                    Tortor praesent semper arcu facilisis class eget mauris
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { name: "James Patterson", role: "President", image: "/james.png" },
                        { name: "Sophia Martinez", role: "Secretary", image: "/james.png" },
                        { name: "Liam Johnson", role: "Treasurer", image: "/james.png" },
                        { name: "Olivia Wilson", role: "Additional Secretary", image: "/james.png" },
                        { name: "Emily Davis", role: "Creative Executive", image: "/james.png" },
                        { name: "Pedro Rodriguez", role: "Events Coordinator", image: "/james.png" },
                        { name: "Claire Allen", role: "Social Coordinator", image: "/james.png" },
                        { name: "Michael Brown", role: "Sports Coordinator", image: "/james.png" },
                    ].map((member, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-72">
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

            {/* Insights Section */}
            <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-8">
                <h2 className="text-6xl font-bold text-center mb-8">IAM Insights</h2>
                <p className="text-center text-gray-600 mb-20 max-w-3xl mx-auto text-xl">
                    Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class.
                </p>
                
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">20%</h3>
                        <h4 className="text-2xl font-semibold mb-4">Increased Recognitions</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">15%</h3>
                        <h4 className="text-2xl font-semibold mb-4">More Networking</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">89%</h3>
                        <h4 className="text-2xl font-semibold mb-4">Average ROI Return</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">250+</h3>
                        <h4 className="text-2xl font-semibold mb-4">Satisfied Members</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">15+</h3>
                        <h4 className="text-2xl font-semibold mb-4">Workshops Organised</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-6xl font-bold mb-4">30%</h3>
                        <h4 className="text-2xl font-semibold mb-4">Increased Client Acquisition</h4>
                        <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    </div>
                </div>
            </div>

            {/* Ready to Join Section */}
            <div className="min-h-screen flex items-center justify-center px-8">
                <div className="bg-gray-50 rounded-xl py-24 px-12 text-center max-w-7xl w-full">
                    <h2 className="text-7xl font-bold mb-8">Ready to join?</h2>
                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                    <div className="flex gap-6 justify-center">
                        <button className="bg-yellow-400 px-10 py-5 rounded-md text-xl font-medium">Sign Up</button>
                        <button className="bg-black text-white px-10 py-5 rounded-md text-xl font-medium">View Plans</button>
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <BlogArticle />
            <FooterSection />
        </main>
    )
}
