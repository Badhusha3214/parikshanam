'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function Works() {
  const works = [
    {
      id: 1,
      title: "Gold's Gym Advertisement",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Seemati Onam Advertisement",
      videoId: "EIoNYcG6IgI",
    },
    {
      id: 3,
      title: "Planna - Project Management App",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Another Project",
      videoId: "EIoNYcG6IgI",
    },
    {
      id: 5,
      title: "Seemati Onam Advertisement",
      videoId: "EIoNYcG6IgI",
    },
    {
      id: 6,
      title: "Planna - Project Management App",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Another Project",
      videoId: "EIoNYcG6IgI",
    },
  ]

  


  return (
    <section >
      <h2 className="custom-h2 text-fontColor-sub-heading">Works</h2>
      <div className="border p-5 relative">
        <div 
          className="flex overflow-x-auto scrollable gap-5 pb-5 "
        >
          {works.map((work) => (
            <div key={work.id} className="flex-none  group w-full sm:[width:calc(50%-20px)] md:[width:calc(33.333%-20px)] space-y-3">
              <div className="relative aspect-[4/3]">
                <Image
                  fill
                  src={`https://img.youtube.com/vi/${work.videoId}/mqdefault.jpg`}
                  alt={work.title}
                  className="rounded-lg object-cover"
                />
                <a 
                  href={`https://www.youtube.com/watch?v=${work.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute  inset-0 flex items-center justify-center"
                >
                  <div className="w-12 h-12 group-hover:animate-pulse  bg-gray-50/30 rounded-full flex items-center justify-center">

                    <Play className="w-6 h-6 text-gray-900/70 " />
                  </div>
                </a>
              </div>
              <h3 className="custom-h5  font-medium text-fontColor-secondary">{work.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

