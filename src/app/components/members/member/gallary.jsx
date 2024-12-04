'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Gallery() {
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const images = [
            {
              id: 1,
              url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
              alt: "Gallery Image 1",
            },
            {
              id: 2,
              url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
              alt: "Gallery Image 2",
            },
            {
              id: 3,
              url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
              alt: "Gallery Image 3",
            },
            {
              id: 4,
              url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
              alt: "Gallery Image 1",
            },
            {
              id: 5,
              url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
              alt: "Gallery Image 2",
            },
            {
              id: 6,
              url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
              alt: "Gallery Image 3",
            },
            {
              id: 7,
              url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
              alt: "Gallery Image 1",
            },
            {
              id: 8,
              url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
              alt: "Gallery Image 2",
            },
            {
              id: 9,
              url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
              alt: "Gallery Image 3",
            },
            {
              id: 10,
              url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
              alt: "Gallery Image 1",
            },
            {
              id: 11,
              url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
              alt: "Gallery Image 2",
            },
            {
              id: 12,
              url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
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
                <img
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

// 'use client'

// import { useState, useEffect } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// export function Gallery() {
//     const images = [
//         {
//           id: 1,
//           url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//           alt: "Gallery Image 1",
//         },
//         {
//           id: 2,
//           url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//           alt: "Gallery Image 2",
//         },
//         {
//           id: 3,
//           url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//           alt: "Gallery Image 3",
//         },
//         {
//           id: 4,
//           url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//           alt: "Gallery Image 1",
//         },
//         {
//           id: 5,
//           url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//           alt: "Gallery Image 2",
//         },
//         {
//           id: 6,
//           url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//           alt: "Gallery Image 3",
//         },
//         {
//           id: 7,
//           url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//           alt: "Gallery Image 1",
//         },
//         {
//           id: 8,
//           url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//           alt: "Gallery Image 2",
//         },
//         {
//           id: 9,
//           url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//           alt: "Gallery Image 3",
//         },
//         {
//           id: 10,
//           url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//           alt: "Gallery Image 1",
//         },
//         {
//           id: 11,
//           url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//           alt: "Gallery Image 2",
//         },
//         {
//           id: 12,
//           url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//           alt: "Gallery Image 3",
//         },
//       ];

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [visibleImages, setVisibleImages] = useState(3)

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setVisibleImages(3) // Desktop
//       } else if (window.innerWidth >= 768) {
//         setVisibleImages(2) // Tablet
//       } else {
//         setVisibleImages(1) // Mobile
//       }
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const next = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex + visibleImages >= images.length ? 0 : prevIndex + visibleImages
//     )
//   }

//   const prev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex - visibleImages < 0 ? Math.max(images.length - visibleImages, 0) : prevIndex - visibleImages
//     )
//   }

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(Math.min(slideIndex * visibleImages, images.length - visibleImages))
//   }

//   const totalDots = Math.ceil(images.length / visibleImages)

//   return (
//     <section className="mb-12">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
//       <div className="relative max-w-5xl mx-auto flex items-center gap-4"> {/* Added max-width here */}
//         <button
//           onClick={prev}
//           className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <div className="flex-1 overflow-hidden">
//           <div 
//             className="flex gap-4 transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
//           >
//             {images.map((image) => (
//               <div 
//                 key={image.id}
//                 className="flex-none w-full"
//                 style={{ width: `calc((100% - ${(visibleImages - 1) * 1}rem) / ${visibleImages})` }}
//               >
//                 <img
//                   src={image.url}
//                   alt={image.alt}
//                   className="w-full aspect-[5/5] object-cover rounded-lg" 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={next}
//           className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       <div className="flex justify-center gap-2 mt-4">
//         {[...Array(totalDots)].map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               Math.floor(currentIndex / visibleImages) === idx ? 'bg-gray-800' : 'bg-gray-300'
//             }`}
//             aria-label={`Go to slide group ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }




// "use client";

// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export function Gallery() {
//   const images = [
//     {
//       id: 1,
//       url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//       alt: "Gallery Image 1",
//     },
//     {
//       id: 2,
//       url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//       alt: "Gallery Image 2",
//     },
//     {
//       id: 3,
//       url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//       alt: "Gallery Image 3",
//     },
//     {
//       id: 4,
//       url: "https://s3-alpha-sig.figma.com/img/6c2e/146a/42c4c03a4836e801e0fe7b2b2a35eef0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTCNJYc8pbbDh9cHsYilTMYdpiqmYYWQMdtzI4MFWct~WTQK0TtMpwDFkL~W9c07Dss~ULnY6FsAtjNzfTWwXxo0rELYkVahUewZTsL8x2VxA85ObU3n6rgyJhNk4jxjcYQtWRtWgWLSLOcz6T5heWVsYIrnbgJI7v3VNcefjDuVHwhvw9LxBtEVgWjW30~Fh3QWqG3v0IDRNMnMYBNouaUwCvv4Ofh6I3P3fQyI~YqHXGJSCdUs6Bof~TUKpIIhUpjla8dlPwmSsEtanK5BoAbAuhUQm-4WZuC2IpUtXexPOOVD8~-ZzZhbA7IsMi51ZIqFIp3yEw0oae~9oI-Gdw__",
//       alt: "Gallery Image 1",
//     },
//     {
//       id: 2,
//       url: "https://s3-alpha-sig.figma.com/img/3482/f04d/b8c7034c56359c1596ba0b994d50f270?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEh86aPalA0NXEJrc5ZZBFHJMDfsOv8uw-SGvwHa1P4Rlu~d4qWPuH-BDhJ02UP~~zoqK5r8Cq4xl69p7vyQijKWzL2s6NRq8Q4kYSNKM89ynaOZ2xtI~SF1VLqw9rZdIZw-ZLzIbVg6MjS0qkJcz4KtvAeVozLlDlrEt0fvDtI~ElDTo57yT4Far6HuSShiLOHzU2YrqqZHPpPZmpCdw8AAs5sumnYEP2zvCdqh4bL9y57EKlQQyLWZRTfFvJ1k4WVYfdEuu1id6AleCn7ZhrWRMMzBSbexNGbD0tGLKKHWPNIOBeMyHF97rzpIpqi-RZuAfhz2fjJpTC7oU~kAYg__",
//       alt: "Gallery Image 2",
//     },
//     {
//       id: 3,
//       url: "https://s3-alpha-sig.figma.com/img/0431/7124/8432f8f20f241649cf42bf64101193d5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JO~-lj--lT4akknMXdLM4ps0b~Ztp1LSO3MdqkQ3g4zd7TjUrHKOL42AsLAcD38FF~uYHAoRdRvkeZm08mQV1fCFLiduTBxzWbo6UFt7BS5PVFOf5xdZOYv0fahbtDWY0zStr9ty3lzk~IbMjtS6ZlFlCgeJW00ArM~m4rCCBixL7idU4O1qY34EhSIgcQUy3BEENIP4HFLYmfyKcUj5inUEaOxn6ZmcO8gGGZHg7IGCRc9X-k5hORdaYxD-aibrsul-Sg3ws6tYRjPJh6umvjwbbB-Zt0Dl8SIR8Iz586it48tnvSYnpZXMvRg3oXqAEWsF8sFEus~DAsSRLpKGew__",
//       alt: "Gallery Image 3",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleImages, setVisibleImages] = useState(3);
//   const containerRef = useRef(null);

//   useEffect(() => {
//   const handleResize = () => {
//    if (window.innerWidth >= 1024) {
//      setVisibleImages(3)
//    } else if (window.innerWidth >= 768) {
//      setVisibleImages(2)
//    } else {
//      setVisibleImages(1)
//       }
//      }

//     handleResize()
//    window.addEventListener('resize', handleResize)
//    return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + visibleImages >= images.length ? 0 : prevIndex + visibleImages
//     );
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - visibleImages < 0
//         ? Math.max(images.length - visibleImages, 0)
//         : prevIndex - visibleImages
//     );
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(Math.min(slideIndex, images.length - visibleImages));
//   };

//   return (
//     <section>
//       <h2 className="custom-h2 text-fontColor-sub-heading">Gallery</h2>
//       <div className="relative" ref={containerRef}>
//         <div className="flex items-center gap-4">
//           <button
//             onClick={prev}
//             className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <div className="flex-grow-1 overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (100 / visibleImages)
//                 }%)`,
//               }}
//             >
//               {images.map((image) => (
//                 <div
//                   key={image.id}
//                   className="w-full flex-shrink-0 px-2"
//                   style={{ width: `calc((100% - ${(visibleImages - 1) * 1}rem) / ${visibleImages})` }}
//                 >
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     className="w-full aspect-[5/8] object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={next}
//             className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="flex justify-center gap-2 mt-4">
//           {Array.from({ length: Math.ceil(images.length / visibleImages) }).map(
//             (_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToSlide(idx * visibleImages)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   idx === Math.floor(currentIndex / visibleImages)
//                     ? "bg-gray-800"
//                     : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to slide group ${idx + 1}`}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client'

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setVisibleImages(3)
//       } else if (window.innerWidth >= 768) {
//         setVisibleImages(2)
//       } else {
//         setVisibleImages(1)
//       }
//     }

//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + visibleImages >= images.length ? 0 : prevIndex + visibleImages
//     )
//   }

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - visibleImages < 0 ? Math.max(images.length - visibleImages, 0) : prevIndex - visibleImages
//     )
//   }

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(Math.min(slideIndex * visibleImages, images.length - visibleImages))
//   }

//   const totalDots = Math.ceil(images.length / visibleImages)

//   return (
//     <section className="mb-12">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
//       <div className="flex items-center gap-4">
//         <button
//           onClick={prev}
//           className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <div className="flex-1 overflow-hidden">
//           <div
//             className="flex gap-4 transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
//           >
//             {images.map((image) => (
//               <div
//                 key={image.id}
//                 className="flex-none w-full"
//                 style={{ width: `calc((100% - ${(visibleImages - 1) * 1}rem) / ${visibleImages})` }}
//               >
//                 <img
//                   src={image.url}
//                   alt={image.alt}
//                   className="w-full aspect-[3/4] object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={next}
//           className="flex-none w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       <div className="flex justify-center gap-2 mt-4">
//         {[...Array(totalDots)].map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               Math.floor(currentIndex / visibleImages) === idx ? 'bg-gray-800' : 'bg-gray-300'
//             }`}
//             aria-label={`Go to slide group ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }
