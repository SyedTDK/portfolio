import Link from 'next/link'

export default async function Contact() {
    return (
        <>
        <body className='bg-back bg-cover backdrop-blur-sm min-h-screen'>
            <header className='flex justify-start'>
                    <Link href="/" className='text-6xl hover:text-slate-100 material-symbols-outlined'>arrow_back</Link>
            </header>
            <div className='flex justify-center pt-20'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center text-5xl'>Contact</h1>
            </div>
            <div className='flex justify-center p-5'>
                <p className='text-center backdrop-blur-md text-3xl font-bold'>
                    Email: <a href='mailto:syedfaizullah007@gmail.com' target="_blank" className='hover:underline'>syedfaizullah007@gmail.com<span className="material-symbols-outlined">north_east</span></a>
                    <br /><a href='https://www.linkedin.com/in/syed-faizullah/' target="_blank" className='hover:underline hover:'>LinkedIn<span className="material-symbols-outlined">north_east</span></a>
                </p>
            </div>
        </body>
        </>
    )
}