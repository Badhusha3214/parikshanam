import { FooterSection } from '../../../components/footer';
import Navbar from "../../../components/navbar"

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Navbar />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Join as a Model</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Standard Plan */}
                    <div className="bg-gray-50 rounded-lg p-8">
                        <div className="flex items-center justify-center h-12 w-12 bg-yellow-400/20 rounded-full mb-6">
                            <span className="text-xl">🏛️</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Standard Plan:</h3>
                        <p className="text-gray-600 mb-6">
                            Yearly membership with access to 3 professional photos. Ideal for basic needs. Perfect for individuals seeking a minimal portfolio.
                        </p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">₹2,000</span>
                            <span className="text-gray-600">/ Per Year</span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium hover:bg-yellow-500">
                            Get Started
                        </button>
                        <div className="mt-6">
                            <p className="text-gray-600 mb-2">Features:</p>
                            <ul className="space-y-2">
                                <li>3 Photos</li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>

                    {/* Platinum Plan */}
                    <div className="bg-black text-white rounded-lg p-8">
                        <div className="flex items-center justify-center h-12 w-12 bg-yellow-400 rounded-full mb-6">
                            <span className="text-xl">👑</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Platinum Plan:</h3>
                        <p className="text-gray-400 mb-6">
                            Yearly membership with 10 photos and 5 videos. Best for extensive portfolios with maximum content flexibility.
                        </p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">₹10,000</span>
                            <span className="text-gray-400">/ Per Year</span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium hover:bg-yellow-500">
                            Get Started
                        </button>
                        <div className="mt-6">
                            <p className="text-gray-400 mb-2">Added Features:</p>
                            <ul className="space-y-2">
                                <li>10 Photos</li>
                                <li>5 Videos</li>
                                <li className="flex items-center gap-2">
                                    1 Exclusive Event
                                    <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded">Limited Offer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-gray-50 rounded-lg p-8">
                        <div className="flex items-center justify-center h-12 w-12 bg-yellow-400/20 rounded-full mb-6">
                            <span className="text-xl">📄</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Premium Plan:</h3>
                        <p className="text-gray-600 mb-6">
                            Yearly membership offering 5 photos and 2 videos. A balanced package for those needing more visual variety.
                        </p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">₹5,000</span>
                            <span className="text-gray-600">/ Per Year</span>
                        </div>
                        <button className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium hover:bg-yellow-500">
                            Get Started
                        </button>
                        <div className="mt-6">
                            <p className="text-gray-600 mb-2">Added Features:</p>
                            <ul className="space-y-2">
                                <li>5 Photos</li>
                                <li>2 Videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}

