'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { FooterSection } from '../components/footer'
import { MapPin, Phone, Mail, ChevronDown, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-20 md:py-20 mt-6">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src="/contactus.png"
                                alt="Business handshake"
                                width={600}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                <p className="text-tsh md:text-tn text-fontColor-primary">
                                    On Stage, Near Mc Donalds, Palarivatttom,
                                    <br />
                                    Chakkaraparambu, Ernakulam, Kerala 683032, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <a href="tel:+91484414826" className="text-tsh md:text-tn text-fontColor-primary hover:underline">
                                    +91 484 4148269
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <a
                                    href="mailto:indianadfilmmakers@gmail.com"
                                    className="text-tsh md:text-tn text-fontColor-primary hover:underline"
                                >
                                    indianadfilmmakers@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h1 className="text-mobile-mid md:text-mid text-fontColor-heading font-bold mb-2">Connect With Us</h1>
                        <p className="text-tsh md:text-tn text-fontColor-muted mb-6">Fill out the form to get in touch with IAM</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-tsh md:text-tn text-fontColor-heading">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 text-tsh md:text-tn border border-gray-300 rounded focus:outline-none focus:border-brand"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-tsh md:text-tn text-fontColor-heading">
                                    First name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="w-full px-3 py-2 text-tsh md:text-tn border border-gray-300 rounded focus:outline-none focus:border-brand"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-tsh md:text-tn text-fontColor-heading">
                                    Last name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="w-full px-3 py-2 text-tsh md:text-tn border border-gray-300 rounded focus:outline-none focus:border-brand"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-tsh md:text-tn text-fontColor-heading">
                                    Phone number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-3 py-2 text-tsh md:text-tn border border-gray-300 rounded focus:outline-none focus:border-brand"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-tsh md:text-tn text-fontColor-heading">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows={7}
                                    className="w-full px-3 py-2 text-tsh md:text-tn border border-gray-300 rounded focus:outline-none focus:border-brand"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand text-fontColor-heading py-3 px-4  flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors text-tsh md:text-tn"
                            >
                                Submit
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}