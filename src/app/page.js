import React from 'react';
import Image from 'next/image';
import WhyIAM from './components/whyiam';
import Navbar from './components/navbar';

const IAMNextPage = () => {
  return (
    <div className="text-black">
      {/* Replace the old navigation with the new Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <Image
        src="/1111.png"
        alt="Background"
        fill
        priority
        className="object-cover w-full h-full fixed top-0 left-0 z-[-1]"
        quality={100}
      />

      <div className="absolute inset-0  z-0"></div>
      <div className="relative z-10 flex md:ml-24 flex-col items-start justify-center h-screen px-10 text-white">
        <h1 className="text-7xl font-bold mb-6">IAM: Empowering</h1>
        <h1 className="text-7xl font-bold mb-2">Indian Ad Film Makers</h1>
        <p className='my-8 md:w-1/3'>Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.</p>
        <div className="flex space-x-4">
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 text-bold hover:bg-yellow-500">Join Us</button>
          <button className="bg-gray-800 text-white px-8 py-3 border border-yellow-400 hover:bg-gray-700">Our Industry Resources</button>
        </div>
      </div>

      {/* Who IAM? */}
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

      {/* Replace the Our Purpose section with the WhyIAM component */}
      <WhyIAM />

      {/* Our Initiatives */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className='text-lg border-2 border-gray-400 font-bold px-6 py-2 rounded-xl inline-block'>Our Services</span>
            <h1 className='text-6xl font-bold mt-6'>Our Initiatives</h1>
          </div>

          <div className="flex flex-col space-y-14 max-w-6xl mx-auto">
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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-8 mb-20 -mt-10 md:px-52">
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
          <div className='md:w-1/2'>
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

    </div>
  );
};

export default IAMNextPage; 