import Image from 'next/image'
import Header from './components/Header'



export default async function Home() {
  return (
    <>
      <Header />
        <main className='flex items-center justify-center px-4 mx-auto max-w-screen-xl min-h-screen text-center lg:px-12'>
          <div className='w-full text-2xl text-left'>
        
            Hello <span className='wave'>&#128075;</span> I’m Syed Faizullah. I work as an Adminstrator at the <a className='text-yellow-500 hover:text-yellow-700' href="https://steminstitutenyc.org/" target='_blank'>Stem Institute</a>, an academic enrichment organization. Previously, I worked as a Web Manager at <a className=' text-blue-500 hover:text-blue-700' href='https://stem-sc.com/'>Stem Communities</a>, a social media platform designed as a location for academic support, tutoring, and social interaction. I enjoy working with technology and analyzing and solving complex problems. 
          
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
