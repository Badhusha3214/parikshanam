'use client'

import { Check, X } from 'lucide-react'





function WorkTypeItem({ name, accepted }) {
  return (
    <div className="flex items-center gap-2">
      {accepted ? (
        <div className="rounded-full p-1 bg-green-100">
          <Check className="w-3 h-3 text-green-600" />
        </div>
      ) : (
        <div className="rounded-full p-1 bg-red-100">
          <X className="w-3 h-3 text-red-600" />
        </div>
      )}
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  )
}

export function WorkTypes({ workTypes }) {
  const preferredWorks = workTypes.filter(work => work.accepted)
  const declinedWorks = workTypes.filter(work => !work.accepted)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Preferred Work Types</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {preferredWorks.map((work, index) => (
            <WorkTypeItem key={index} {...work} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Declined Work Types</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {declinedWorks.map((work, index) => (
            <WorkTypeItem key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  )
}

