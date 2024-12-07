export default function Home() {
  return (
    <div className="flex-col justify-center justify-items-center">
      <header>
        <h1>Climate check</h1>
      </header>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 absolute right-2 top-1/3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input className="hover:bg-transparent focus:bg-transparent p-2" type="text" aria-label="Filter by city" placeholder="Filter by city..." />
      </div>
      <div className="relative"></div>
    </div>
  )
}
