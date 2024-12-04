import React from 'react'

const Languages = ({languages}) => {
  return (
    <div>
        <h2 className='custom-h2'>Languages</h2>
        <div>
            <p className='custom-base text-fontColor-primary font-normal mb-4'>Languages that the model is proficient in</p>
            <ul className='flex flex-wrap gap-2 md:w-3/4'>
               {
                languages.map((language,i) => (
                    <li key={i} className='px-3 py-1 custom-base font-normal text-brand-secondary bg-brand-subtle rounded-full'>{language}</li>
                ))
               }
            </ul>
        </div>
    </div>
  )
}

export default Languages