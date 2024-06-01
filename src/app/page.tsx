import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <>
      <header>
        <nav className=" px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Syed Faizullah</span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link href="/" className="focus:ring-4 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Home</Link>
                    <Link href="/Project" className="focus:ring-4 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Work</Link>
                </div>
            </div>
        </nav>
      </header>
        <main className='flex items-center justify-center px-4 mx-auto max-w-screen-xl min-h-screen text-center lg:px-12'>
          <div className='w-full'>
          <p className=' w-full text-2xl'> 
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256" className='inline'><path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg>            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256" className='inline'><path d="M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM216,88V216a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,144H40a8,8,0,0,0,0,16H52v48a8,8,0,0,0,16,0V160H80a8,8,0,0,0,0-16Z"></path></svg>
Developer and <svg className='inline' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fafafa" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg> 
            Analyst */}
            Hello &#128075; I'm Syed Faizullah, a Frontend Developer. Currently, I work as an Adminstrator at the <a className='text-yellow-300 hover:text-yellow-600' href="https://steminstitutenyc.org/" target='_blank'>Stem Institute</a>, an academic enrichment organization. Previously, I worked as a Web Manager at <a className=' text-blue-200 hover:text-blue-600' href='https://stem-sc.com/'>Stem Communities</a>, a social media platform designed as a location for academic support, tutoring, and social interaction. I love using technologies like Next.js, React, and Tailwind to create beautiful and responsive websites.
          </p>
          <div className='flex mb-8 lg:mb-16 sm:flex-row justify-center sm:space-y-0 sm:space-x-4 pt-4'>
          <a title='X' href='https://twitter.com/syedfaizul007' target='_blank' className='rounded-lg focus:ring-4 focus:ring-gray-800 focus:outline-none hover:bg-gray-700 p-1'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg></a>
          <a title='Linkedin' href='https://www.linkedin.com/in/syed-faizullah/' target='_blank' className='rounded-lg focus:ring-4 focus:ring-gray-800 focus:outline-none hover:bg-gray-700 p-1'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg></a>
          <a title='Github' href='https://github.com/SyedTDK' target='_blank' className='rounded-lg focus:ring-4 focus:ring-gray-800 focus:outline-none hover:bg-gray-700 p-1'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg></a>
          </div>
       </div>
      </main>
   </>
  )
}
