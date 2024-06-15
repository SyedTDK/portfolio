import Link from "next/link";
import Header from "../components/Header";

export default async function Project() {
    return (
        <> 
            <Header />
            <div className='flex justify-center pt-20 text-4xl sm:text-5xl'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap text-center font-extrabold leading-loose'>Recent Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 backdrop-blur-md text-md text-xs sm:text-lg">
                <a href="https://healthai.vercel.app/" target="_blank">
                <div>
                    <img className="h-auto max-w-full transition-all duration-50 rounded-lg blur-none hover:blur-sm" src="/project2.png" alt=""/>
                </div>
                </a>
                <div className="justify-center sm:my-20">
                    <p><a className="font-bold hover:text-gray-500 block" href="https://healthai.vercel.app/" target="_blank">HealthMe (2024)</a> Understand and manage your medical symptoms. HealthMe features a sophisticated chatbot powered by natural language processing technology, offering personalized responses to health-related queries. Key functionalities include secure user registration and login, real-time interactive chat, viewing past chat interactions, logbook to keep track of health and find specialists within seconds anywhere in the world.
                    </p>
                </div>
                <a href="https://wellbeing-theta.vercel.app/" target="_blank">
                <div>
                    <img className="h-auto max-w-full transition-all duration-300 rounded-lg blur-none hover:blur-sm" src="/project1.png" alt=""/>
                </div>
                </a>
                <div className="justify-center sm:my-20">
                    <p><a className="font-bold hover:text-gray-500 block" href="https://wellbeing-theta.vercel.app/" target="_blank">WellBeing (2023)</a> A dynamic and interactive web application focused on engaging users through meditations, personalized daily prompts, allowing them to sign up, log in, submit responses, and revisit their entries.
                    </p>
                </div>     
            </div>
        </>
    )
}
