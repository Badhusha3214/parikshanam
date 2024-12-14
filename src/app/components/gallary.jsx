'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

export function Gallery() {
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const images = [
            {
              id: 1,
              url : "/members/member-1.png",
              alt: "Gallery Image 1",
            },
            {
              id: 2,
              url : "/members/member-2.png",
              alt: "Gallery Image 2",
            },
            {
              id: 3,
              url : "/members/member-3.png",
              alt: "Gallery Image 3",
            },
            {
              id: 4,
              url : "/members/member-1.png",
              alt: "Gallery Image 1",
            },
            {
              id: 5,
              url : "/members/member-2.png",
              alt: "Gallery Image 2",
            },
            {
              id: 6,
              url : "/members/member-1.png",
              alt: "Gallery Image 3",
            },
            {
              id: 7,
              url : "/members/member-1.png",
              alt: "Gallery Image 1",
            },
            {
              id: 8,
              url : "/members/member-1.png",
              alt: "Gallery Image 2",
            },
            {
              id: 9,
              url : "/members/member-1.png",
              alt: "Gallery Image 3",
            },
            {
              id: 10,
              url : "/members/member-1.png",
              alt: "Gallery Image 1",
            },
            {
              id: 11,
              url : "/members/member-1.png",
              alt: "Gallery Image 2",
            },
            {
              id: 12,
              url : "/members/member-1.png",
              alt: "Gallery Image 3",
            },
          ];
  const handlePrev = () => {
    if (swiper) swiper.slidePrev()
  }

  const handleNext = () => {
    if (swiper) swiper.slideNext()
  }

  return (
    <section className="mb-12">
      <h2 className="custom-h2 font-bold text-fontColor-sub-heading mb-6">Gallery</h2>
      <div className="flex gap-2 items-center">
      <button 
            onClick={handlePrev}
            disabled={isBeginning}
            className={`
              p-2 rounded-full border border-gray-300 
              ${isBeginning 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white hover:bg-black hover:text-white'}
            `}
          >
            <ChevronLeft size={24} />
          </button>
        <Swiper
          modules={[Navigation, Pagination]}
        
          spaceBetween={16}
          slidesPerView={3}
          navigation={false}
          pagination={{ clickable: true }}
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full">
                <Image
                  width={500}
                  height={500}
                  src={image.url}
                  alt={image.alt}
                  className="w-full aspect-[5/5] object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button 
            onClick={handleNext}
            disabled={isEnd}
            className={`
              p-2 rounded-full border border-gray-300 
              ${isEnd 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white hover:bg-black hover:text-white'}
            `}
          >
            <ChevronRight size={24} />
          </button>

        
       
      </div>
    </section>
  )
}


