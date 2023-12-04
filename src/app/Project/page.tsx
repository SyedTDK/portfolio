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
                        <p className="font-bold">Well Being: A mental health web platform offering users daily thoughtful prompts for self-reflection. Users can sign up manually or via their Google account to save their responses for future viewing purposes. 
                            Developed using NextJS, Tailwind CSS, Next-auth, and Firebase.
                            <br /> <a href='https://github.com/SyedTDK/wellbeing' target="_blank" className='hover:underline text-2xl'>Github<span className="material-symbols-outlined">north_east</span></a>
                        </p>
                    </div>
                    <div>
                        
                    </div>
                </div>
             
             </body>
        </>
    )
}
