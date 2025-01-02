"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { CoordinatorCard } from '../model-coordinators/coordinator-list'

const ModelSlider = ({coordinators}) => {
const [currentPage,setCurrentPage] = useState(0);
const [itemsPerPage,setItemsPerPage] = useState(3)


const totalPages = Math.ceil(coordinators.length/itemsPerPage)

const coordinatorsOnView = coordinators.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  return (
     <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="custom-h2 text-fontColor-secondary !mb-0">Model Coordinators</h2>
          <p className="text-fontColor-sub-heading mt-1">Choose from our experienced model coordinators.</p>
        </div>
        <div className="flex gap-4">
          <button 
           
            onClick={handlePrevious}
            className='border p-3 border-black hover:bg-brand-subtle'
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4  text-black" />
          </button>
          <button 
            
            onClick={handleNext}
            className='border p-3 border-black hover:bg-brand-subtle'
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
      <div>
         <ul  className='grid sm:grid-cols-2  lg:grid-cols-3 gap-3'>
        {coordinatorsOnView.map((profile,i) => (
           <li key={i}>
                <CoordinatorCard coordinator={profile}/>
          </li>
        ))}
          </ul>
      </div>
    </div>
  )
}

export default ModelSlider