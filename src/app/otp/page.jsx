'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../components/navbar'

export default function VerifyPage() {
    const router = useRouter()
    const [otp, setOtp] = useState(['', '', '', '', ''])

    const handleChange = (index, value) => {
        if (value.length <= 1) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)

            // Auto-focus next input
            if (value && index < 4) {
                const nextInput = document.getElementById(`otp-${index + 1}`)
                nextInput?.focus()
            }
        }
    }

    const handleNext = () => {
        // Here you might want to add OTP validation logic
        // For now, we'll just navigate if all OTP fields are filled
        if (otp.every(digit => digit.trim() !== '')) {
            router.push('/password')
        }
    }

    const handleBack = () => {
        router.back()
    }

    return (
        <>
            <Navbar />
            <div className="flex min-h-screen">
                <div className="relative hidden w-1/2 bg-[#FFF9F0] lg:block">
                    <div className="absolute inset-0 z-0 bg-[url('/otp.svg')] bg-cover bg-center opacity-100"></div>
                </div>

                <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-large font-bold text-center">Verify OTP</h1>
                            <p className="text-gray-600 text-center">
                                An OTP has been sent to your provided Phone Number. Verify the OTP to proceed further.
                            </p>
                        </div>

                        <div className="flex gap-4 justify-center">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength={1}
                                    className="w-14 h-14 text-center text-mid border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            ))}
                        </div>

                        <p className="text-center">
                            <button className="text-yellow-600 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
                                Resend OTP?
                            </button>
                        </p>

                        <div className="flex gap-4">
                            <button 
                                onClick={handleBack}
                                className="flex-1 bg-gray-100 text-black font-semibold p-3 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            >
                                Back
                            </button>
                            <button 
                                onClick={handleNext}
                                className="flex-1 bg-yellow-400 text-black font-semibold p-3 rounded-lg hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}