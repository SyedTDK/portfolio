import Link from "next/link";
import Header from "../components/Header";

export default async function Project() {
    return (
        <> 
            <Header />
            <div className='flex justify-center pt-20 text-4xl sm:text-5xl'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center font-extrabold leading-loose'>Recent Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 backdrop-blur-md text-md sm:text-xl">
                <a href="https://healthai.vercel.app/" target="_blank">
                <div>
                    <img className="h-auto max-w-full transition-all duration-300 rounded-lg blur-none hover:blur-sm" src="/project2.png" alt=""/>
                </div>
                </a>
                <div className="justify-center sm:my-20">
                    <p><a className="font-bold hover:text-gray-500" href="https://healthai.vercel.app/" target="_blank">HealthMe (2024)</a> A health assistant platform that provides AI chatbot for personal health and tracking health data.
                    </p>
                </div>
                <a href="https://wellbeing-theta.vercel.app/" target="_blank">
                <div>
                    <img className="h-auto max-w-full transition-all duration-300 rounded-lg blur-none hover:blur-sm" src="/project1.png" alt=""/>
                </div>
                </a>
                <div className="justify-center sm:my-20">
                    <p><a className="font-bold hover:text-gray-500" href="https://wellbeing-theta.vercel.app/" target="_blank">WellBeing (2023)</a> A dynamic and interactive web application focused on engaging users through meditations, personalized daily prompts, allowing them to sign up, log in, submit responses, and revisit their entries.
                    </p>
                </div>     
            </div>
        </>
    )
}
