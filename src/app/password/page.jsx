'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
export default function CreatePasswordPage() {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match')
            return
        }
        if (!formData.agreeToTerms) {
            alert('Please agree to the terms and conditions')
            return
        }
        router.push('/')
        console.log(formData)
    }

    return (
        <>
            <Navbar />
            <div className="flex mt-14 min-h-screen">
                <div className="relative hidden w-1/2 bg-[#FFF9F0] lg:block">
                    <div className="absolute inset-0 z-0 bg-[url('/pass.svg')] bg-cover bg-center opacity-100"></div>
                </div>

                <div className="flex mx-auto max-w-[650px] items-center justify-center px-6 lg:w-1/2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-bold text-left">Create Password</h2>
                            <p className="text-gray-600 text-left">
                                Your password must be at least 8 characters long, include uppercase and lowercase letters, numbers, and special
                                symbols.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-gray-600">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Enter a strong password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-600">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    placeholder="Re-Enter Your Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                                    checked={formData.agreeToTerms}
                                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                />
                                <label htmlFor="terms" className="text-gray-600">
                                    Agree to{' '}
                                    <Link href="/terms" className="text-yellow-600 hover:underline">
                                        Terms & Conditions
                                    </Link>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-lg hover:bg-yellow-500 transition-colors"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

