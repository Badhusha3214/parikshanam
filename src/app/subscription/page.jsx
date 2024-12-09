'use client'

import React from 'react'
import Navbar from '../components/navbar'

export default function SubscriptionPage() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-center mb-16">
                    Discover Your Role In IAM
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* IAM Member */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3">IAM Member</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/User.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">01</span>
                        </div>
                    </div>

                    {/* Preferred Partner */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Preferred Partner</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/Business.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">02</span>
                        </div>
                    </div>

                    {/* Aspiring Talent */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Aspiring Talent</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/Creative.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">03</span>
                        </div>
                    </div>

                    {/* Model */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Model</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/Dimond.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">04</span>
                        </div>
                    </div>

                    {/* Model Coordinator */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Model Coordinator</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/Support.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">05</span>
                        </div>
                    </div>

                    {/* Subscriber */}
                    <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col relative">
                        {/* Info Icon */}
                        <div className="absolute top-4 right-4">
                            <img src="/icon/Vector.png" alt="Info" width={32} height={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-3">Subscriber</h2>
                            <p className="text-gray-600 mb-4">
                                Become a recognized member of India's leading Ad Film platform.
                            </p>
                        </div>
                        <div className="flex items-center pt-10 mt-auto">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                                <img src="/icon/Viision.png" alt="IAM Member" width={32} height={32} />
                            </div>
                            <span className="text-gray-300 text-5xl ml-auto font-light">06</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}