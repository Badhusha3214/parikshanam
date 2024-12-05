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
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.2 7.17c.22 4.92-3.45 10.37-9.96 10.37-1.98 0-3.83-.58-5.38-1.57 1.85.22 3.7-.29 5.18-1.45-1.53-.03-2.82-1.04-3.27-2.43.54.1 1.08.08 1.58-.06-1.66-.33-2.85-1.85-2.81-3.47.46.26 1 .42 1.56.43-1.54-.97-2-2.87-1.07-4.33 1.85 2.28 4.61 3.79 7.72 3.95-.55-2.37 1.25-4.67 3.69-4.67.8 0 2.23.4 2.83 1.08.57-.08 1.12-.32 1.61-.59-.18.58-.57 1.07-1.08 1.38.5-.03.97-.19 1.41-.38-.33.54-.75 1.01-1.23 1.39z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* Facebook Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* Instagram Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.548.334 3.465 1.417 2.382 2.5 2.176 3.723 2.118 5.004.06 6.284 0 6.693 0 12s.06 5.716.118 6.996c.058 1.281.264 2.504 1.347 3.587 1.083 1.083 2.306 1.289 3.587 1.347 1.28.058 1.689.118 6.996.118s5.716-.06 6.996-.118c1.281-.058 2.504-.264 3.587-1.347 1.083-1.083 1.289-2.306 1.347-3.587.058-1.28.118-1.689.118-6.996s-.06-5.716-.118-6.996c-.058-1.281-.264-2.504-1.347-3.587C19.504.264 18.281.058 17 .118 15.72.06 15.311 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* LinkedIn Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* YouTube Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* Pinterest Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            {/* WhatsApp Icon */}
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { FooterSection }