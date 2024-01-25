import Link from "next/link";

export default async function Project() {
    return (
        <>
            <body className="bg-back bg-cover backdrop-blur-sm min-h-screen">
                <header className='flex justify-start'>
                    <Link href="/" className='text-6xl hover:text-slate-100 material-symbols-outlined'>arrow_back</Link>
                </header>
                <div className='flex justify-center pt-20'>
                    <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center text-5xl'>Featured Work</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 backdrop-blur-md">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="/project1.png" alt=""/>
                    </div>
                    <div className="justify-center">
                        <p className="font-bold">Well Being: A dynamic and interactive web application developed using Next.js, a React framework. This project focused on engaging users through meditations, personalized daily prompts, allowing them to sign up, log in, submit responses, and revisit their entries.
                            <br /> <a href='https://github.com/SyedTDK/wellbeing' target="_blank" className='hover:underline text-2xl'>Github<span className="material-symbols-outlined">north_east</span></a>
                            <br /> <a href='https://wellbeing-theta.vercel.app/' target="_blank" className='hover:underline text-2xl'>Visit Website<span className="material-symbols-outlined">north_east</span></a>
                        </p>
                    </div>
                    <div>
                        
                    </div>
                </div>
             
             </body>
        </>
    )
}
