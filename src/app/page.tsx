import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <body className='min-h-screen bg-back bg-cover backdrop-blur-sm overscroll-none'>
        <header className='flex justify-center container mx-auto'>
            <h1 className='select-none hover:scale-110 content-center animate-typing overflow-hidden whitespace-nowrap text-center font-bold text-5xl md:text-8xl '>Syed Faizullah</h1>
        </header>
        <div className='p-20'>
          <p className='select-none text-center font-semibold text-3xl'>Web Developer and Data Analyst</p> 
        </div>
        <div className='p-10 text-center text-3xl md:text-5xl pt-30'>
          <Link className="text-center hover:scale-110 hover:text-slate-100 font-bold" href='/About'><span className="material-symbols-outlined">person</span>About</Link>
        </div>
        <div className='p-10 text-center text-3xl md:text-5xl'>
          <Link className="text-center hover:scale-110 hover:text-slate-100 font-bold" href="/Project"><span className="material-symbols-outlined">devices</span>Projects</Link>
        </div>
        <div className='p-10 text-center text-3xl md:text-5xl'>
          <Link className="text-center hover:scale-110 hover:text-slate-100 font-bold" href='/Contact'><span className="material-symbols-outlined">mail</span>Contact</Link>
        </div>
      </body>
   </>
  )
}
