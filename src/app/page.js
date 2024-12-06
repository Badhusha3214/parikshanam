'use client'
import React from 'react';
import Image from 'next/image';
import WhyIAM from './components/whyiam';
import Navbar from './components/navbar';
import IAMMemberPerks from './components/member';
import { FooterSection } from './components/footer';
import IamPeople from './components/iampeople';

const IAMNextPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="relative h-screen">
        <Image
          src="/1111.png"
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0  z-0"></div>
        <div className="relative z-10 flex md:ml-24 flex-col items-start justify-center h-full px-4 md:px-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6">IAM: Empowering</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">Indian Ad Film Makers</h1>
          <p className='my-4 md:my-8 text-sm md:text-base w-full md:w-1/3'>Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button className="bg-yellow-400 text-gray-900 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold hover:bg-yellow-500 w-full sm:w-auto">Join Us</button>
            <button className="bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base border border-yellow-400 hover:bg-gray-700 w-full sm:w-auto">Our Industry Resources</button>
          </div>
        </div>
      </div>

      {/* Who IAM? */}
      <div className="w-full overflow-x-hidden">
        <main className="px-10 py-10 md:pt-32 md:pl-32 ">
          <section className="flex flex-col md:flex-row space-y-10 md:space-x-32">
            <div className='md:w-1/2'>
              <Image src="/margin.svg" alt="IAM" width={990} height={900} />
            </div>
            <div className='md:w-1/2 md:py-28'>
              <h2 className="text-7xl font-light mb-5">Who <span className='font-bold'>IAM?</span></h2>
              <p className='text-2xl md:w-3/4 mt-8 py-2 text-gray-700'>Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit interdum.</p>
              <button className="bg-yellow-400 mt-8 font-bold text-gray-900 px-8 py-3 flex items-center space-x-2 hover:bg-yellow-500">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </section>
        </main>

        <WhyIAM />

        {/* Our Initiatives */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className='text-lg border-2 border-gray-400 font-bold px-6 py-2 rounded-xl inline-block'>Our Services</span>
              <h1 className='text-6xl font-bold mt-6'>Our Initiatives</h1>
            </div>

            <div className="flex flex-col md:space-y-40 space-y-10 max-w-8xl mx-auto">
              <div className="flex flex-col md:flex-row items-start bg-white rounded-xl  overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="w-full md:w-1/2 h-68 md:h-auto">
                  <img src="/1.svg" alt="Expert Talks & Workshops" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 sm:ml-8 sm:pt-0 p-8 md:px-12">
                  <h3 className="text-2xl md:text-3xl font-bold top-0 mb-4">Expert Talks & Workshops</h3>
                  <p className="text-gray-700  text-lg mb-6">Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit interdum aenean quis.</p>
                  <button className=" flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-8 rounded-full hover:bg-gray-100 transition-colors">Learn More
                    <img src="/Next.svg" alt="arrow" className="w-5 h-5 mx-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-start bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="w-full md:w-1/2 h-68 md:h-auto">
                  <img src="/2.svg" alt="Social Impact" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 sm:ml-8 sm:pt-0 p-8 md:px-12">
                  <h3 className="text-2xl md:text-3xl font-bold top-0 mb-4">Social Impact</h3>
                  <p className="text-gray-700 text-lg mb-6">Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit interdum aenean quis.</p>
                  <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-8 rounded-full hover:bg-gray-100 transition-colors">Learn More
                    <img src="/Next.svg" alt="arrow" className="w-5 h-5 mx-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="w-full md:w-1/2 h-68 md:h-auto">
                  <img src="/3.svg" alt="IAM Responsible Awards" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 sm:ml-8 sm:pt-0 p-8 md:px-12">
                  <h3 className="text-2xl md:text-3xl font-bold top-0 mb-4">IAM Responsible Awards</h3>
                  <p className="text-gray-700 text-lg mb-6">Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit interdum aenean quis.</p>
                  <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-8 rounded-full hover:bg-gray-100 transition-colors">Learn More
                    <img src="/Next.svg" alt="arrow" className="w-5 h-5 mx-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Industry Resources */}
        <div className="bg-white pt-20">
          <div className="container mx-auto px-4">
            <div className="text-left mb-16">
              <span className='text-lg border-2 border-gray-400 font-bold px-6 py-2 rounded-xl inline-block'>Our Industry Resources</span>
              <h1 className='text-5xl md:text-6xl font-bold mt-6'>Choose From The Best</h1>
              <p className="my-4 font-medium text-lg md:text-xl text-gray-700">
                Lacinia ornare magna penatubus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris. Tortor praesent semper arcu facilisis class eget mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-8 mb-20 -mt-10 md:px-[310px] ">
          <div className="w-full md:flex-1 md:mr-8 mb-8 md:mb-0">
            <div className="flex flex-col items-start bg-white overflow-hidden transform transition-all duration-300">
              <div className="w-full flex-1 p-6 md:p-8 border-l-4 border-yellow-400">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Model Bank</h2>
                <p className="mb-4 text-sm md:text-base">
                  Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
                </p>
                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-4 md:pl-8 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base">
                  Learn More
                  <img src="/Next.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5 mx-2 md:mx-4" />
                </button>
              </div>

              <div className="w-full flex-1 p-6 md:p-8 border-l-4 border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Preferred Partners</h2>
                <p className="mb-4 text-sm md:text-base">
                  Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
                </p>
                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-4 md:pl-8 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base">
                  Learn More
                  <img src="/Next.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5 mx-2 md:mx-4" />
                </button>
              </div>

              <div className="w-full flex-1 p-6 md:p-8 border-l-4 border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Aspiring Technicians</h2>
                <p className="mb-4 text-sm md:text-base">
                  Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
                </p>
                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-4 md:pl-8 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base">
                  Learn More
                  <img src="/Next.svg" alt="arrow" className="w-4 h-4 md:w-5 md:h-5 mx-2 md:mx-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
            <img src="/OIR.svg" alt="OIR" className="w-full max-w-md md:max-w-full h-auto rounded-xl" />
          </div>
        </div>

        <main className="px-10 py-10 md:pt-32 md:px-32">
          <section className="flex flex-col md:flex-row space-y-10 md:space-x-32">
            <div className='md:w-1/2 md:ml-24'>
              <Image src="/join.svg" alt="IAM" width={800} height={800} />
            </div>
            <div className='md:w-1/2 md:py-28'>
              <div className="container mx-auto">
                <div className="text-left mb-16">
                  <span className='text-lg border-2 border-gray-400 font-bold px-6 py-2 rounded-xl inline-block'>Join IAM</span>
                  <h1 className='text-6xl font-bold mt-6'>Become an IAMian</h1>
                  <p className='text-xl md:w-3/4 mt-8 py-2 text-gray-700'>Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et. Efficitur aliquet at dictum, taciti vulputate sociosqu nibh. Maximus dui aptent id netus elit mi condimentum taciti parturient. Facilisis pharetra pellentesque proin habitasse aenean nisl lorem. Vel per condimentum sit interdum.</p>
                  <div className="flex space-x-4 mt-4">
                    <button className="bg-yellow-400 font-bold text-gray-900 px-8 py-3 flex items-center space-x-2 hover:bg-yellow-500">
                      Sign Up
                    </button>
                    <button className="bg-black font-bold text-white px-8 py-3 flex items-center space-x-2 hover:bg-yellow-500">
                      View Plans
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>


        <IAMMemberPerks />


        {/* Subscription Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Subscribe to IAM</h2>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <div className="flex-1 bg-black text-white rounded-2xl p-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-black border-2 border-yellow-400 rounded-lg">
                  <img src="/i1.svg" alt="" className="w-10 h-10" />
                </div>
              </div>
                <h3 className="font-bold my-2 text-3xl">Standard Plan</h3>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹10,000</span>
                <span className="text-gray-400">/ Per Year</span>
              </div>
              <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded mb-8 hover:bg-yellow-500">
                Get Started
              </button>
              <div className=' bg-gray-900 text-white rounded-lg -mx-8 -mb-8 p-4'>
                <p className="font-bold mx-4 mb-4">Features:</p>
                <ul className="space-y-2 mx-4">
                  <li>Model Directory</li>
                  <li>Preferred Partners</li>
                  <li>Aspiring Talents</li>
                  <li>Model Coordinators</li>
                </ul>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div className="flex-1 bg-gray-200 text-black rounded-2xl p-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gray border-2 border-yellow-400 rounded-lg">
                  <img src="/i2.svg" alt="" className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-bold my-2 text-3xl">Life Time Plan</h3>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹25,000</span>
              </div>
              <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded mb-8 hover:bg-yellow-500">
                Get Started
              </button>
              <div className='bg-gray-100 text-black rounded-lg -mx-8 -mb-8 p-4'>
                <p className="font-bold mx-4 mb-4">Features:</p>
                <ul className="space-y-2 mx-4">
                  <li>Model Directory</li>
                  <li>Preferred Partners</li>
                  <li>Aspiring Talents</li>
                  <li>Model Coordinators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <IamPeople />

        {/* Contact Section */}
        <div className="mx-4 md:mx-20 px-2 md:px-4 py-20 md:py-40 flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left Section - Black Box */}
          <div className="w-full md:w-1/2 bg-black text-white rounded-2xl p-6 md:p-16 min-h-[500px] md:min-h-[600px]">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-8">Say Hi to IAM</h2>
            <p className="mb-8 md:mb-12 text-base md:text-xl leading-relaxed max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="space-y-4 md:space-y-6 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <img src="/Frame (4).svg" alt="Location" className="w-6 h-6" />
                <p>On Stage, Near Mc Donalds, Palarivattom, 
                   Chakkaraparambu, Ernakulam, Kerala 683032, India</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Frame (5).svg" alt="Phone" className="w-6 h-6" />
                <p>+91 484 4148269</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Frame (6).svg" alt="Email" className="w-6 h-6" />
                <a href="mailto:indianadfilmmakers@gmail.com" className="underline">
                  indianadfilmmakers@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 md:mt-8 flex items-center justify-left">
              <img 
                src="/Avatar group.svg" 
                alt="Expert Professionals"
                className="w-32 md:w-auto md:pr-10"
              />
              <p className="ml-2 md:ml-4 text-sm md:text-base">More than 1000+ Expert Professionals</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label className="block text-xl md:text-2xl font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
                  required
                />
              </div>

              <div className="">
                <div>
                  <label className="block text-xl md:text-2xl font-medium mb-2">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name"
                    className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xl md:text-2xl mt-2 font-medium mb-2">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name"
                    className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xl md:text-2xl font-medium mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="w-full p-2 md:p-3 border rounded-lg text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-xl md:text-2xl font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Enter your message"
                  className="w-full p-2 md:p-3 border rounded-lg h-24 md:h-32 text-sm md:text-base"
                />
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto bg-yellow-400 text-black font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-yellow-500 text-sm md:text-base"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>

        <FooterSection />
      </div>

    </div>
  );
};

export default IAMNextPage; 