import Link from 'next/link'

export default async function About() {
    return (
        <>
        <body className='bg-back bg-cover backdrop-blur-sm min-h-screen'>
            <header className='flex justify-start'>
                <Link href="/" className='text-6xl hover:text-slate-100 material-symbols-outlined'>arrow_back</Link>
             </header>
            <div className='flex justify-center pt-20'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center text-5xl'>About Me</h1>
            </div>
            <div className='flex justify-center p-5'>
                <p className='text-xl md:text-2xl font-bold backdrop-blur-md'>Hey, I’m Syed and I am an aspiring Frontend developer pursuing a Bachelor of Engineering in Computer Engineering from The City College of New York. 
                I have honed my technical skills through a series of relevant courses and hands-on projects. I am proficient in various programming 
                languages, including HTML, CSS, JavaScript, TypeScript, and Java and I am familiar with front-end and back-end technologies such as Next.js, React, 
                Tailwind CSS, Bootstrap, Node.js, Google Cloud, and Firebase. I have applied my expertise in developing both a mental health platform and a fitness app, 
                demonstrating a passion for creating user-friendly and responsive designs. As an Educational Support Manager at the CUNY Research Foundation, 
                I have successfully led user acquisition strategies and collaborated on data visualization dashboards, furthering my experience in tech-driven educational support. 
                My work as an Administrative Support at the CCNY Stem Institute illustrates my commitment  in database management, preparing me for a 
                thriving career in full-stack development.
                </p>
            </div>
            <div className='flex justify-center'>
                <a href='/Resume - Syed Faizullah.pdf' target="_blank" className='text-3xl font-bold hover:underline'>Resume<span className="material-symbols-outlined">north_east</span></a>
            </div>
        </body>
        </>
    )
}
