import { sevillana } from "../fonts"
import Link from 'next/link'

export default async function Header() {

return (
    <header className={sevillana.className}>
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
)
}