'use client'
import React from 'react'

const FooterSection = () => {
    return (
        <footer className="bg-black text-white py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Logo and Description Column */}
                    <div className="w-full md:w-1/3">
                        <img src="/logo.svg" alt="Logo" className="mb-10 w-36" />
                        <p className="text-gray-400 pr-8">
                            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-8">Main</h4>
                            <ul className="space-y-4 text-gray-300">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Subscriptions</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                                <li><a href="#" className="hover:underline">Gallery</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Users</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:underline">Subscriber</a></li>
                                <li><a href="#" className="hover:underline">IAM Member</a></li>
                                <li><a href="#" className="hover:underline">Preferred Partner</a></li>
                                <li><a href="#" className="hover:underline">Aspiring Talents</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Models</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:underline">Models</a></li>
                                <li><a href="#" className="hover:underline">Coordinators</a></li>
                                <li><a href="#" className="hover:underline">Directory</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-8">Resources</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Refund Policy</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Icons */}
                <hr className="my-8 border-gray-700 md:py-2" />
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Indian Ad Film Makers. All rights reserved.</p>
                    <div className="flex justify-center md:justify-start space-x-10">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <img src="/footer/Linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <img src="/footer/Facebook.png" alt="Facebook" className="w-12 h-12" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <img src="/footer/Instagram.png" alt="Instagram" className="w-12 h-12" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <img src="/footer/LinkedIn.png" alt="LinkedIn" className="w-12 h-12" />
                        </a>

                        <a href="#" className="text-gray-400 hover:text-white">
                            <img src="/footer/Dribbble.png" alt="Pinterest" className="w-12 h-12" />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export { FooterSection }