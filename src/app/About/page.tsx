import Link from 'next/link'

export default async function About() {
    return (
        <>
        <body className='bg-back bg-cover backdrop-blur-sm min-h-screen overscroll-none'>
            <header className='flex justify-start'>
                <Link href="/" className='text-6xl hover:text-slate-100 material-symbols-outlined'>arrow_back</Link>
             </header>
            <div className='flex justify-center pt-20'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center text-5xl'>About Me</h1>
            </div>
            <div className='flex justify-center p-5'>
                <p className='text-xl md:text-2xl font-bold backdrop-blur-md text-center'>I’m Syed, a Data Analyst and Frontend developer. 
                Currently, I’m a Software Engineer at <a href="https://steminstitutenyc.org/" target='_blank'><img src='/SI.svg' height="100" width="100" className='inline'></img></a>. I’m proficient in various programming 
                languages, including HTML5, CSS, JavaScript, TypeScript, and SQL and technologies including Next.js, React, 
                Tailwind CSS, Firebase, and Figma.
                </p>
            </div>
            <div className='flex justify-center'>
                <a href='/Resume - Syed Faizullah.pdf' target="_blank" className='text-3xl font-bold hover:underline'>Resume<span className="material-symbols-outlined">north_east</span></a>
            </div>
        </body>
        </>
    )
}
