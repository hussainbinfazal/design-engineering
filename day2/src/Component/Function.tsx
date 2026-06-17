'use client'

import Image from "next/image";


export function Function() {

    return (
        <main className="flex flex-col justify-start items-center min-h-screen bg-white px-0 py-0">
            <section

                className=" relative  w-full px-0 py-0 rounded-md flex flex-col gap-0 min-h-screen ">
                <Image
                    src="https://images.unsplash.com/photo-1637463675679-d86b8f934b59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8"
                    alt="Hero"
                    fill
                    className="object-cover fill  "
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 "></div>
                <div className="bg-orange-800 z-10 text-center text-sm py-2">
                    <h3>Use your HSA/FSA funds to join function</h3>
                </div>
                <header className="flex flex-col h-full w-full items-center justify-between px-14  py-2 rounded-none bg-transparent max-h-3/5 backdrop-blur-2xl z-10">
                    <div className="flex h-full w-full items-center justify-between"><h1 className="text-3xl font-medium text-white italic z-10">Function</h1>
                        <nav className="flex gap-6 text-white text-sm font-light">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </nav>
                        <div className="flex gap-4 items-center">
                            <h3>Log In</h3>
                            <button className="px-4 py-2 rounded-full bg-orange-800 text-white">Start Testing</button>

                        </div>
                    </div>
                </header>
                <div className="flex flex-col items-start justify-end w-full h-full p-30 gap-10 -mt-15 z-10">

                    <h3 className="text-sm font-light leading-tight text-left text-white ">HSA/FSA Eligible</h3>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-6xl font-semibold leading-tight text-center text-black">Check your health.</h1>
                    </div>
                    <span>
                        <h3 className="text-sm font-light leading-tight text-center text-gray-800 ">Every year. Starting with 160+ lab tests detecting 1000+ <br/> conditions. Just $365 per year -$1 per day</h3>
                    </span>
                    <div className="flex items-start justify-start w-full h-full gap-6 -mt-10">
                        <button className="px-10 py-3 rounded-full bg-green-300 text-sm text-green-900 mt-10">
                            Download App on
                            <br /> Google Play
                        </button>
                        <button className="px-10 py-3 rounded-full bg-green-300 text-sm text-green-900 mt-10">
                            Download App on <br /> App Store
                        </button>
                    </div>

                </div>
                
            </section >
            <footer>

            </footer>
        </main>
    );

} 