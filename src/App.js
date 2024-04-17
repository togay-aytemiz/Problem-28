"use client"

import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'


/// Tamamen fonksiyonel bir counter oluşturun
// Sayıyı görüntülemeyi ve sayıyı artırmayı mümkün kılın
export default function CountUp() {

  const [number, setNumber] = useState(0)

  const handleIncrease = () => {
    setNumber(pre => pre + 1)
  }

  const handleDecrease = () => {
    setNumber(pre => pre - 1)

  }

  return (
    <div className='text-center p-8'>
      
      <h3 className='text-lg font-semibold text-gray-900'>
        Şu anki sayı... {number}
      </h3>
      <div className='mt-6 flex gap-2 items-center justify-center'>
      <button
          onClick={handleDecrease}
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <MinusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
        </button>
        <button
          onClick={handleIncrease}
          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <PlusIcon className='-ml-0.5 mr-1.5 h-5 w-5' />1
        </button>
      </div>
    </div>
  )
}
