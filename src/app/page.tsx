import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <body className='min-h-screen  backdrop-blur-sm overscroll-none'>
        <header className='flex justify-center container mx-auto leading-loose pb-0 mb-0 h-auto'>
            <h1 className='select-none hover:scale-110 content-center animate-typing overflow-hidden whitespace-nowrap text-center font-bold text-5xl md:text-8xl  '>Syed Faizullah</h1>
        </header>
        <div className='p-20'>
          <p className='select-none text-center font-semibold text-3xl'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256" className='inline'><path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg>            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256" className='inline'><path d="M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM216,88V216a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,144H40a8,8,0,0,0,0,16H52v48a8,8,0,0,0,16,0V160H80a8,8,0,0,0,0-16Z"></path></svg>
Developer and <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg> 
            Analyst</p> 
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
