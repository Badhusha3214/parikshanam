'use client'
import React from 'react';
import Image from 'next/image';
import WhyIAM from './components/whyiam';
import Navbar from './components/navbar';
import IAMMemberPerks from './components/member';
import { FooterSection } from './components/footer';
import IamPeople from './components/iampeople';
import IndustryResources from './components/best';
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
        <div className="relative z-10 container mx-auto px text-white">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-[50px] sm:text-[55px] md:text-large lg:text-elarge font-bold leading-tight">
              IAM: Empowering Indian Ad Film Makers
            </h1>
            <p className="text-sm xs:text-pn sm:text-tn md:text-normal opacity-90 max-w-lg">
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md">
              <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-6 py-3 font-bold  text-tn md:text-normal  hover:bg-yellow-500 transition">
                Join Us
              </button>
              <button className="w-full sm:w-auto text-white px-6 py-3 border border-yellow-400 text-tn md:text-normal  hover:bg-white/10 transition">
                Our Industry Resources
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Who IAM? Section - Responsive Layout */}
      <main className="container mx-auto px pt sm:pt-[40px] lg:pt-[60px] xl:pt-[100px]">
        <section className="grid grid-cols-1 lg:grid-cols-2 sm:gap-1 gap-6 lg:gap-12 items-center">
          <div className="lg:order-1 flex justify-center lg:justify-start">
            <Image
              src="/Marginn.svg"
              alt="IAM"
              width={990}
              height={900}
              className="w-full max-w-md lg:max-w-lg xl:max-w-2xl h-auto xs:-mb-2 md:mb-6 lg:mb-0"
            />
          </div>
          <div className="lg:order-2 text-left space-y-4">
            <h2 className="text-ph sm:text-th lg:text-large xl:text-elarge font-light mb-3">
              Who <span className="font-bold">IAM?</span>
            </h2>
            <p className="text-pn text-left sm:text-tn md:text-normal text-gray-700 mb-6 lg:mx-0 max-w-prose">
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis. Venenatis hac per curae velit, molestie maximus et.
            </p>
            <button className="flex items-start justify-start bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-black hover:text-yellow-400 transition">
              <span>Learn More</span>
              <Image
                src="/arrow.svg"
                alt="Learn More"
                width={190}
                height={100}
                className="w-4 sm:w-5 ml-2 h-auto bg-yellow-400 rounded-full"
              />
            </button>
          </div>
        </section>
      </main>

      <WhyIAM />

      {/* Our Initiatives Section - Responsive Cards */}
      <div className="container mx-auto px  pt sm:pt-[40px] lg:pt-[60px] xl:pt-[100px]">
        <div className="text-center mb-16">
          <span className="inline-block border-2 border-gray-400 font-bold px-6 py-2 rounded-xl text-pn sm:text-tn md:text-normal sm mb-4">
            Our Services
          </span>
          <h2 className="text-ph sm:text-th lg:text-large xl:text-large font-bold">Our Initiatives</h2>
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
                <h3 className="text-pch sm:text-pch lg:text-cdh xl:text-cdh font-bold mb-4">
                  {initiative.title}
                </h3>
                <p className="text-pn  md:text-normal sm:text-tn text-gray-700 mb-6">
                  {initiative.description}
                </p>
                <button className="flex items-center text-pn sm:text-tn md:text-normal border-2 border-gray-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-100 transition">
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

      <IndustryResources />

      <main className="container mx-auto pt px sm:px-0 sm:pt-[40px] lg:pt-[60px] xl:pt-[100px] pb-[40px]">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-32 items-center">
          {/* Image Column - Responsive Order */}
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/join.svg"
              alt="IAM"
              width={800}
              height={800}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </div>

          {/* Content Column - Responsive Order */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Tag */}
            <span className="inline-block border-2 border-gray-400 font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-xl text-pn sm:text-tn md:text-normal mb-3 sm:mb-4">
              Join IAM
            </span>

            {/* Heading - Responsive Sizing */}
            <h2 className="text-ph sm:text-th lg:text-mid xl:text-large font-bold mb-4 sm:mb-6">
              Become an IAMian
            </h2>

            {/* Paragraph - Responsive Sizing */}
            <p className="text-pn sm:text-tn md:text-normal text-gray-700 mb-6 sm:mb-8 max-w-prose mx-auto md:mx-0">
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
              Lacinia ornare magna penatibus adipiscing laoreet tempus. Tortor praesent semper arcu facilisis class eget mauris lobortis.
              Lacinia ornare magna penatibus adipiscing laoreet tempus.
            </p>

            {/* Buttons - Responsive Layout */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 text-pn sm:text-tn md:text-normal font-medium rounded-lg hover:bg-black hover:text-yellow-400 transition">
                Sign Up
              </button>
              <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 font-medium text-pn sm:text-tn md:text-normal rounded-lg hover:bg-yellow-400 hover:text-black transition">
                View Plans
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Remaining Sections */}
      <IAMMemberPerks />
      <SubscriptionSection />
      <section className='px'>
        <IamPeople />
      </section>
      <div className="container mx-auto px py sm:py-[40px] lg:py-[60px] xl:py-[100px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Black Box */}
          <div className="bg-black text-white rounded-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-ph sm:text-th lg:text-mid xl:text-large font-bold mb-4 sm:mb-6">
              Say Hi to IAM
            </h2>
            <p className="text-pn sm:text-tn md:text-normal opacity-90 mb-6 sm:mb-8 max-w-xl">
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
                      className="underline text-pn sm:text-tn md:text-normal"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <p className="text-pn sm:text-tn md:text-normal">{contact.text}</p>
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
              <p className="text-pn sm:text-tn md:text-normal">
                More than 1000+ Expert Professionals
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full ">
            <form className="mb-2 space-y-4">
              <div>
                <label className="block text-pch sm:text-pch md:text-cdh mt-2 font-medium mb-2">
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
                  <label className="block text-pch sm:text-pch md:text-cdh font-medium mb-2">
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
                  <label className="block text-pch sm:text-pch md:text-cdh font-medium mb-2">
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
                <label className="block text-pch sm:text-pch md:text-cdh font-medium mb-2">
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
                <label className="block text-pch sm:text-pch md:text-cdh font-medium mb-2">Message</label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full p-2 sm:p-3 border rounded-lg h-20 sm:h-24 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-400 text-black font-bold  px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base hover:bg-black hover:text-yellow-400 transition duration-300 ease-in-out"
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

