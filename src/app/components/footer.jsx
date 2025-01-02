'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FooterSection = () => {
    return (
        <footer className="bg-black text-white py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Logo and Description Column */}
                    <div className="w-full lg:w-1/3">
                        <Image src="/logo.svg" alt="Logo" width={144} height={36} className="mb-6 sm:mb-8 w-36" />
                        <p className="text-gray-400 text-pn sm:text-tn lg:text-tn xl:text-normal pr-0 lg:pr-8">
                            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {[
                            { title: "Main", links: ["Home", "About", "Subscriptions", "Contact", "Gallery"] },
                            { title: "Users", links: ["Subscriber", "IAM Member", "Preferred Partner", "Aspiring Talents"] },
                            { title: "Models", links: ["Models", "Coordinators", "Directory"] },
                            { title: "Resources", links: ["Terms & Conditions", "Refund Policy", "Privacy Policy", "Blogs"] }
                        ].map((section, index) => (
                            <div key={index}>
                                <h4 className="text-pdh sm:text-cdh  lg:text-cdh xl:text-cdh font-bold mb-4 sm:mb-6">{section.title}</h4>
                                <ul className="space-y-2 sm:space-y-3 text-pn sm:text-tn lg:text-tn xl:text-normal">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href="#" className="text-gray-300 hover:underline hover:text-white transition-colors duration-200">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright and Social Icons */}
                <hr className="my-6 sm:my-8 border-gray-700" />
                <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
                    <p className="text-gray-400 text-pn sm:text-tn lg:text-tn xl:text-normal mb-4 sm:mb-0">&copy; 2025 Indian Ad Film Makers. All rights reserved.</p>
                    <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
                        {[
                            { name: "Facebook", src: "/footer/Facebook.png" },
                            { name: "Instagram", src: "/footer/Instagram.png" },
                            { name: "LinkedIn", src: "/footer/LinkedIn.png" },
                            { name: "Dribbble", src: "/footer/Dribbble.png" }
                        ].map((social, index) => (
                            <Link key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Image src={social.src} alt={social.name} width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { FooterSection }

