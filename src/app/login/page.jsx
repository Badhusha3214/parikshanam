import Image from "next/image"
import Link from "next/link"
import Navbar from "../components/navbar"

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-screen">
                {/* Left Section */}
                <div className="relative hidden w-1/2 bg-[#FFF9F0] lg:block">
                    <div className="absolute left-12 top-24 bg-white p-10 z-10">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-10 w-3 rounded-full -mb-6 bg-yellow-100"></div>
                            <div className="h-14 w-3 rounded-full -mb-2 bg-yellow-400"></div>
                            <div className="h-12 w-3 rounded-full -mb-4 bg-yellow-100"></div>
                            <div className="h-16 w-3 rounded-full -mb-0 bg-yellow-400"></div>
                        </div>
                        <div className="text-lg text-gray-600">
                            <span className="block text-4xl font-bold text-black">500+</span>
                            People got hired
                        </div>
                    </div>

                    <div className="absolute bottom-32 right-12 z-10 max-w-md bg-white p-8 shadow-lg">
                        <div className="flex items-center justify-between relative">
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-2xl text-gray-900">Binoy KB</h3>
                                <p className="text-sm text-xl text-gray-500">Ad Film Director</p>
                            </div>
                            <div className="absolute -top-20 right-10">
                                <Image
                                    src="/Avatar1.png"
                                    alt="Binoy KB"
                                    width={108}
                                    height={108}
                                    className="rounded-full border-4 border-white"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            {/* <Image
                                src="/testimonial-icon.png"
                                alt="Testimonial Icon"
                                width={60}
                                height={60}
                                className="rounded-full"
                            /> */}
                            <div className="h-12 w-5 rounded-full text-7xl text-black">  "  </div>
                            <blockquote className="ml-4 text-xl font-medium text-gray-900">
                                "Great platform for talents searching for new career heights."
                            </blockquote>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-0 bg-[url('/login.svg')] bg-cover bg-center opacity-100"></div>
                </div>

                {/* Right Section */}
                <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
                    <div className="w-full max-w-md space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-large font-bold">Welcome Back</h1>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address/username
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                                    placeholder="Enter email address/username"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                                    />
                                    <span className="text-sm text-gray-600">Remember me</span>
                                </label>
                                <Link href="/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-700">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-yellow-400 px-4 py-3 text-center font-semibold text-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                            >
                                Login
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link href="/sign-up" className="font-semibold text-yellow-600 hover:text-yellow-700">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

