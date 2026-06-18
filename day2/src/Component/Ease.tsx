'use client'

import Image from "next/image";


export function Ease() {
    const cards = [
        {
            title: "Card 1",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 2",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 3",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

    ]
    return (
        <main className="flex flex-col justify-start items-center min-h-screen bg-white px-0 py-0 max-width-[1200px]">
            <section

                className=" relative  w-full px-0 py-0 rounded-md flex flex-col gap-0 min-h-screen bg-white ">
                {/* <Image
                    src="https://images.unsplash.com/photo-1637463675679-d86b8f934b59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8"
                    alt="Hero"
                    fill
                    className="object-cover fill  "
                /> */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 "></div> */}

                <header className="flex flex-col h-full w-full items-center justify-between px-14  py-2 rounded-none bg-transparent max-h-1/5 backdrop-blur-2xl z-10">
                    <div className="flex h-full w-full items-center justify-between"><h1 className="text-5xl font-medium text-green-950 italic z-10">ease</h1>
                        <nav className="flex gap-6 text-black text-sm font-light">
                            <a href="#">About Us</a>
                            <a href="#">Case Studies</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </nav>
                        <div className="flex gap-4 items-center">
                            <h3 className="text-black">Log In</h3>
                            <button className="px-4 py-2 rounded-full bg-green-800 text-black">Book Demo</button>

                        </div>
                    </div>
                </header>
                <div className="grid grid-cols-2 items-start justify-start w-full h-full  p-10 gap-3  z-10 min-h-135 max-h-3/5">

                    <div className="flex flex-col gap-10 bg-white rounded-md w-full h-full justify-between ">

                        <div className="flex flex-col gap-4 min-h-100 bg-green-700/50 items-start justify-between px-10 py-10 rounded-md text-white w-full ">
                            <h1 className="text-6xl font-light leading-tight text-start text-black">Fewer Clicks.<br /> <span className="font-light "> More care.</span>
                            </h1>
                            <h3 className="text-lg font-light leading-tight text-start text-black">Admit more patients, reduce staff burderns and get paid faster with an AI-native system behavioral healthcare  </h3>
                        </div>
                        <span className="w-full  min-h-30 px-10 py-3 flex items-center justify-center rounded-md bg-green-900 text-2xl">
                            Request a Demo
                        </span>
                    </div>
                    <div className="flex items-center justify-center  h-full w-full gap-6 ">
                        <div className="bg-blue-100 w-full h-full rounded-md flex flex-row items-center justify-center gap-4">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="min-h-50 min-w-40 rounded-md bg-white flex flex-col gap-4 items-center justify-center "

                                >
                                    <img
                                        src={card.imageUrl}
                                        alt={card.title}
                                        className="w-10 h-10    object-cover rounded-full"
                                    />
                                    <p className="text-black">{card.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <footer className="max-h-1/5 flex items-center justify-center gap-4">

                </footer>
            </section >
        </main>
    );

} 