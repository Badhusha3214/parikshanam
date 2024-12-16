'use client'
import React from 'react';
import Image from 'next/image';
import WhyIAM from './components/whyiam';
import Navbar from './components/navbar';
import IAMMemberPerks from './components/member';
import { FooterSection } from './components/footer';
import IamPeople from './components/iampeople';
import SubscriptionSection from './components/subscription';

const IAMNextPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Fully Responsive */}
      <div className="relative h-screen flex items-center">
        <Image
          src="/1111.png"
          alt="Background"
          fill
          priority
          className="object-cover absolute inset-0 z-0"
          quality={100}
        />
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-elarge font-bold">
              IAM: Empowering Indian Ad Film Makers
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-lg">
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md">
              <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-6 py-3 font-bold  hover:bg-yellow-500 transition">
                Join Us
              </button>
              <button className="w-full sm:w-auto text-white px-6 py-3 border border-yellow-400  hover:bg-white/10 transition">
                Our Industry Resources
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Who IAM? Section - Responsive Layout */}
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-32">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="lg:order-1 flex justify-center lg:justify-start">
          <Image
            src="/Marginn.svg"
            alt="IAM"
            width={990}
            height={900}
            className="w-full max-w-md lg:max-w-lg xl:max-w-2xl h-auto mb-6 lg:mb-0"
          />
        </div>
        <div className="lg:order-2 text-center lg:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-3">
            Who <span className="font-bold">IAM?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 mx-auto lg:mx-0 max-w-prose">
            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
            Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
          </p>
          <button className="mx-auto lg:mx-0 flex items-center justify-center bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-500 transition">
            <span>Learn More</span>
            <Image
              src="/arrow.svg"
              alt="Learn More"
              width={190}
              height={100}
              className="w-4 sm:w-5 ml-2 h-auto"
            />
          </button>
        </div>
      </section>
    </main>

      <WhyIAM />

      {/* Our Initiatives Section - Responsive Cards */}
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block border-2 border-gray-400 font-bold px-6 py-2 rounded-xl text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">Our Initiatives</h2>
        </div>

        <div className="space-y-16">
          {[
            {
              title: "Expert Talks & Workshops",
              description: "Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.",
              image: "/1.svg",
              reversed: false
            },
            {
              title: "Social Impact",
              description: "Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.",
              image: "/2.svg",
              reversed: true
            },
            {
              title: "IAM Responsible Awards",
              description: "Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.",
              image: "/3.svg",
              reversed: false
            }
          ].map((initiative, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${initiative.reversed ? 'md:grid-cols-2-reverse' : ''
                }`}
            >
              <div className={`${initiative.reversed ? 'md:order-2' : ''}`}>
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className={`${initiative.reversed ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {initiative.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  {initiative.description}
                </p>
                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
                  Learn More
                  <Image
                    src="/NextButton.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Resources Section - Responsive Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-left mb-12">
          <span className="inline-block border-2 border-gray-400 font-bold px-6 py-2 rounded-xl text-sm mb-4">
            Our Industry Resources
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">Choose From The Best</h2>
          <p className="text-base md:text-xl text-gray-700 mt-4 max-w-6xl">
            Lacinia ornare magna penatubus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
            Lacinia ornare magna penatubus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {[
              {
                title: "Model Bank",
                description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
                borderColor: "border-yellow-400"
              },
              {
                title: "Preferred Partners",
                description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
                borderColor: "border-gray-200"
              },
              {
                title: "Aspiring Technicians",
                description: "Lacinia ornare magna penatibus adipiscing laoreet tempus.",
                borderColor: "border-gray-200"
              }
            ].map((resource, index) => (
              <div
                key={index}
                className={`border-l-4 p-6 ${resource.borderColor}  transition`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {resource.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {resource.description}
                </p>
                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition">
                  Learn More
                  <Image
                    src="/NextButton.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <Image
              src="/OIR.svg"
              alt="OIR"
              width={500}
              height={400}
              className="w-4/5 h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Join IAM Section - Responsive */}
      <main className="container mx-auto px-4 py-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/join.svg"
              alt="IAM"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block border-2 border-gray-400 font-bold px-6 py-2 rounded-xl text-sm mb-4">
              Join IAM
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Become an IAMian
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-6 py-3 font-bold rounded-lg hover:bg-yellow-500 transition">
                Sign Up
              </button>
              <button className="w-full sm:w-auto bg-black text-white px-6 py-3 font-bold rounded-lg hover:bg-gray-800 transition">
                View Plans
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Remaining Sections */}
      <IAMMemberPerks />
      <SubscriptionSection />
      <IamPeople />
      <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Section - Black Box */}
        <div className="bg-black text-white rounded-2xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Say Hi to IAM
          </h2>
          <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-6 sm:mb-8 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: "/Frame (4).svg",
                text: "On Stage, Near Mc Donalds, Palarivattom, Chakkaraparambu, Ernakulam, Kerala 683032, India"
              },
              {
                icon: "/Frame (5).svg",
                text: "+91 484 4148269"
              },
              {
                icon: "/Frame (6).svg",
                text: "indianadfilmmakers@gmail.com",
                isLink: true
              }
            ].map((contact, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <Image
                  src={contact.icon}
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="mt-1 flex-shrink-0"
                />
                {contact.isLink ? (
                  <a
                    href={`mailto:${contact.text}`}
                    className="underline text-xs sm:text-sm lg:text-base"
                  >
                    {contact.text}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm lg:text-base">{contact.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 flex items-center space-x-3 sm:space-x-4">
            <Image
              src="/Avatar group.svg"
              alt="Expert Professionals"
              width={120}
              height={40}
            />
            <p className="text-xs sm:text-sm lg:text-base">
              More than 1000+ Expert Professionals
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-lg sm:text-xl lg:text-2xl font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg sm:text-xl lg:text-2xl font-medium mb-2">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-lg sm:text-xl lg:text-2xl font-medium mb-2">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg sm:text-xl lg:text-2xl font-medium mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl lg:text-2xl font-medium mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-2 sm:p-3 border rounded-lg h-24 sm:h-32 text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 rounded-lg hover:bg-yellow-500 text-sm sm:text-base transition duration-300 ease-in-out"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>

      </div>
        <FooterSection />

    </div>
  );
};

export default IAMNextPage; 