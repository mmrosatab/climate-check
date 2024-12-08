'use client'

import { useState } from 'react'

export default function Home() {

  const [value, setValue] = useState('')

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setValue('')
    }

  }

  const handleClick = () => {
    setValue('')
  }

  return (
    <div className="flex-col justify-center justify-items-center">
      <header className="w-6/12 flex justify-center p-4 text-2xl">
        <h1>Climate check</h1>
      </header>
      <div className="relative w-1/4 h-10">
        <button
          type="button"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff"
            className="size-6 absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        <input className="focus:outline-none w-full bg-blue-400 h-10 p-4 text-white placeholder:italic placeholder:text-white"
          type="text"
          aria-label="Search for a city"
          placeholder="Search for a city..."
          onKeyDown={(e) => handlePressEnter(e)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}
