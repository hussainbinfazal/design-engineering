export async function Juicebox() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start bg-white">
            <div className="w-full flex items-center justify-center bg-black min-h-15 text-sm">
                <p className="text-white">Juicebox raises $36M led by Sequoia Capital - Read More</p>

            </div>
            <section className="w-full  flex flex-col items-center justify-between min-h-15 h-screen">
                <div className="flex justify-center items-center p-5  border-b border-gray-300 w-full">
                    <div className="flex gap-4 items-center justify-between w-full max-w-350">
                        <div className="text-black flex gap-20">
                            <p className="font-bold text-3xl">Juicebox</p>
                            <nav className="flex gap-8 items-center justify-center text-sm">
                                <a>Features</a>
                                <a>Pricing</a>
                                <a>Resources</a>
                                <a>Customers</a>
                            </nav>
                        </div>
                        <div className="text-black flex gap-2 items-end justify-center px-2">
                            <button className="text-black px-5 py-2">Sign In</button>
                            <button className="text-black text px-5 py-2">Book a demo</button>
                            <button className="bg-black text-white px-5 py-2">Try for free</button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-start items-start w-full h-screen max-w-350  border-2 border-t-0 border-gray-300 ">
                    <div className="flex flex-col gap-15 items-start justify-center  w-full h-full max-h-120 px-5">
                        <h1 className="text-black text-6xl font-light">
                            Win the talent war.
                        </h1>
                        <h3 className="text-sm leading-6 text-black">
                            Juicebox is the AI Recruiting Platform that understands who you're <br /> looking for. Level up your team with Search, CRM, and Agents
                        </h3>
                        <div className="flex gap-4 items-center justify-center">
                            <button className="text-black text px-5 py-2 border border-gray-300">Try for Free</button>
                            <button className="bg-black text-white px-5 py-2 border border-black">Book a Demo</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 items-center justify-center w-full h-full max-h-20 px-5 border-2  border-gray-300">
                        <button className="px-4 py-1 text-black text-3xl">Patreon</button>
                        <button className="px-4 py-1 text-black text-3xl">Ramp</button>
                        <button className="px-4 py-1 text-black text-3xl">Verkada</button>
                        <button className="px-4 py-1 text-black text-3xl">Perplexity</button>
                        <button className="px-4 py-1 text-black text-3xl">Quora</button>
                        <button className="px-4 py-1 text-black text-3xl">Intuit</button>
                    </div>
                    <div className="flex bg-purple-800/60 h-100 w-full ">

                </div>
                </div>
                


            </section>
        </main>
    )

}