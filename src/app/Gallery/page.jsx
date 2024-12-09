'use client'

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useState } from 'react'
import Navbar from "../components/navbar"

const ITEMS_PER_PAGE = 15

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = 100 // Example total number of items
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
      }

      if (startPage > 1) {
        pageNumbers.push(1)
        if (startPage > 2) {
          pageNumbers.push('...')
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...')
        }
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
     <Navbar /> 

      {/* Hero */}
      <div className="relative width-auto h-[700px] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/BG.svg"
            alt="Gallery Banner"
            fill
            priority
            className="w-full h-full object-cover opacity-50"
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/content.svg"
            alt="Gallery Overlay"
            width={400}
            height={400}
            className="object-contain z-10"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <div className="hidden md:block w-64 shrink-0">
          <h2 className="font-semibold mb-4">Image Albums</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm">Onam Celebration 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm">IAM Talk Event 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm">IAM Website Launch 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm">Iam Christmas 2024</span>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div key={i} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {i % 2 === 1 ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ) : null}
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Gallery+Image+${i + 1 + (currentPage - 1) * ITEMS_PER_PAGE}`}
                  alt={`Gallery Image ${i + 1 + (currentPage - 1) * ITEMS_PER_PAGE}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {renderPageNumbers().map((page, index) => (
              typeof page === 'number' ? (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="w-8 h-8 flex items-center justify-center">
                  {page}
                </span>
              )
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

