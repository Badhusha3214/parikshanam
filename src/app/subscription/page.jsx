'use client'

import React from 'react'
import Navbar from '../components/navbar'
import Link from 'next/link'

export default function SubscriptionPage() {
    const subscriptionOptions = [
        {
            title: "IAM Member",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/User.png",
            number: "01",
            href: "/subscription/into"
        },
        {
            title: "Preferred Partner",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/Business.png",
            number: "02",
            href: "/partners"
        },
        {
            title: "Aspiring Talent",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/Creative.png",
            number: "03",
            href: "/membership/aspiring-talent"
        },
        {
            title: "Model",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/Dimond.png",
            number: "04",
            href: "/membership/model"
        },
        {
            title: "Model Coordinator",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/Support.png",
            number: "05",
            href: "/membership/model-coordinator"
        },
        {
            title: "Subscriber",
            description: "Become a recognized member of India's leading Ad Film platform.",
            icon: "/icon/Viision.png",
            number: "06",
            href: "/membership/subscriber"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-12 mt-20">
                <h1 className="text-5xl font-bold text-center mb-16">
                    Discover Your Role In IAM
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subscriptionOptions.map((option) => (
                        <Link 
                            href={option.href} 
                            key={option.number}
                            className="block"
                        >
                            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative cursor-pointer">
                                {/* Info Icon */}
                                <div className="absolute top-4 right-4">
                                    <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-3">{option.title}</h2>
                                    <p className="text-gray-600 mb-4">
                                        {option.description}
                                    </p>
                                </div>
                                <div className="flex items-center pt-10 mt-auto">
                                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <img src={option.icon} alt={option.title} width={32} height={32} />
                                    </div>
                                    <span className="text-gray-300 text-5xl ml-auto font-light">{option.number}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}