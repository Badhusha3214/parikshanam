'use client'
import React from 'react';

const SubscriptionSection = () => {
  return (
    <div className="container mx-auto py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
      <div className="text-center mb-12">
        <h2 className="text-ph sm:text-th lg:text-mid xl:text-large font-bold mb-4">Subscribe to IAM</h2>
        <p className="text-gray-700 text-pn sm:text-tn md:text-normal max-w-2xl mx-auto">
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
          <h3 className="font-bold my-2 text-cdh sm:text-pch md:text-cdh">Standard Plan</h3>
          <p className="text-gray-400 text-pn sm:text-tn md:text-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mb-6">
            <span className="text-ph sm:text-th md:text-mid font-bold">₹10,000</span>
            <span className="text-gray-400 text-pn sm:text-tn md:text-normal">/ Per Year</span>
          </div>
          <button className="w-full bg-yellow-400 text-black font-bold py-3 text-pn sm:text-tn md:text-normal rounded mb-8 hover:bg-yellow-500">
            Get Started
          </button>
          <div className='text-pn sm:text-tn md:text-normal bg-gray-900 text-white rounded-lg -mx-8 -mb-8 p-4'>
            <p className="font-bold mx-4 mb-4">Features:</p>
            <ul className="space-y-2 mx-4 list-disc	list-inside	">
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
          <p className="text-gray-700 mb-6 text-pn sm:text-tn md:text-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mb-6">
            <span className="text-ph sm:text-th md:text-mid font-bold">₹25,000</span>
          </div>
          <button className="w-full bg-yellow-400 text-black font-bold py-3 text-pn sm:text-tn md:text-normal rounded mb-8 hover:bg-yellow-500">
            Get Started
          </button>
          <div className='text-pn sm:text-tn md:text-normal bg-gray-100 text-black rounded-lg -mx-8 -mb-8 p-4'>
            <p className="font-bold mx-4 mb-4">Features:</p>
            <ul className="space-y-2 mx-4 list-disc list-inside		">
              <li>Model Directory</li>
              <li>Preferred Partners</li>
              <li>Aspiring Talents</li>
              <li>Model Coordinators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection; 