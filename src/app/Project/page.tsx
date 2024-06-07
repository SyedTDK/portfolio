import Link from "next/link";
import Header from "../components/Header";

export default async function Project() {
    return (
        <> 
            <Header />
            <div className='flex justify-center pt-20'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center text-5xl font-extrabold'>Featured Work</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 backdrop-blur-md text-md sm:text-xl">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/project2.png" alt=""/>
                </div>
                <div className="justify-center">
                    <p className="font-bold">HealthMe (2024): A health assistant platform that provides AI chatbot for personal health and tracking health data.
                        <br /> <a href='https://healthai.vercel.app/' target="_blank" className='hover:underline text-2xl'>Live Website<span className="material-symbols-outlined">north_east</span></a>
                    </p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/project1.png" alt=""/>
                </div>
                <div className="justify-center">
                    <p className="font-bold">WellBeing (2023): A dynamic and interactive web application focused on engaging users through meditations, personalized daily prompts, allowing them to sign up, log in, submit responses, and revisit their entries.
                        <br /> <a href='https://github.com/SyedTDK/wellbeing' target="_blank" className='hover:underline text-2xl'>Github<span className="material-symbols-outlined">north_east</span></a>
                        <br /> <a href='https://wellbeing-theta.vercel.app/' target="_blank" className='hover:underline text-2xl'>Live Website<span className="material-symbols-outlined">north_east</span></a>
                    </p>
                </div>     
            </div>

        </>
    )
}
