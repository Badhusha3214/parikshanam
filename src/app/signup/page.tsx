'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '../components/navbar'

export default function SignupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        userType: '',
        fullName: '',
        email: '',
        phone: ''
    })
    const [errors, setErrors] = useState({
        userType: '',
        fullName: '',
        email: '',
        phone: ''
    })

    const validateForm = () => {
        let isValid = true
        const newErrors = { userType: '', fullName: '', email: '', phone: '' }

        if (!formData.userType) {
            newErrors.userType = 'Please select a user type'
            isValid = false
        }

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
            isValid = false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
            isValid = false
        }

        const phoneRegex = /^\+?[1-9]\d{1,14}$/
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number'
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            // Handle form submission
            console.log(formData)
            // Navigate to the OTP page
            router.push('/otp')
        }
    }

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen">
                <div className="relative hidden w-1/2 bg-[#FFF9F0] lg:block">
                    <div className="absolute inset-0 z-0 bg-[url('/signup.svg')] bg-cover bg-center opacity-100"></div>
                </div>

                <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-bold text-center">Explore Opportunities <br></br> With IAM</h1>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="userType" className="text-black">User Type</label>
                                <select
                                    id="userType"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={formData.userType}
                                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                                    aria-invalid={!!errors.userType}
                                    aria-describedby="userType-error"
                                >
                                    <option value="">Choose Subscription Type</option>
                                    <option value="basic">Basic</option>
                                    <option value="pro">Pro</option>
                                </select>
                                {errors.userType && <p id="userType-error" className="text-red-500 text-sm mt-1">{errors.userType}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-black">Full Name</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    aria-invalid={!!errors.fullName}
                                    aria-describedby="fullName-error"
                                />
                                {errors.fullName && <p id="fullName-error" className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-black">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    aria-invalid={!!errors.email}
                                    aria-describedby="email-error"
                                />
                                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-black">Phone</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter phone no"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    aria-invalid={!!errors.phone}
                                    aria-describedby="phone-error"
                                />
                                {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                                Next
                            </button>
                        </form>

                        <p className="text-center text-black">
                            Already have an account?{' '}
                            <Link href="/login" className="text-yellow-600 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}