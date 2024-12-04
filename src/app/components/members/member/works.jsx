'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'

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
    <section>
      <h2 className="custom-h2 text-fontColor-sub-heading">Works</h2>
      <div className="border p-6 relative">
        <div 
       
          className="flex overflow-x-auto scrollable space-x-6 pb-4"
        >
          {works.map((work) => (
            <div key={work.id} className="flex-none group w-full sm:w-1/2 md:w-1/3 space-y-2">
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${work.videoId}/0.jpg`}
                  alt={work.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <a 
                  href={`https://www.youtube.com/watch?v=${work.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-12 h-12 group-hover:animate-pulse  bg-white/50 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-900" />
                  </div>
                </a>
              </div>
              <h3 className="text-sm font-medium text-gray-900">{work.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

