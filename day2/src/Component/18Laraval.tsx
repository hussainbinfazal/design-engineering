import Image from "next/image";

export async function Laravel(){
    return(<main className="flex flex-col items-start justify-start min-h-screen bg-linear-to-b from-black-700 to-blue-900 max-h-screen  w-full px-18 overflow-hidden">
        <header className="max-w-400 flex items-center justify-between w-full min-h-20 max-h-20">
            <h1 className="text-2xl font-light text-white">Laravel Cloud</h1>
            <nav className="flex gap-6 items-center justify-center text-sm">
                <a className="text-gray-200/50">Pricing</a>
                <a className="text-gray-200/50">Platform</a>
                <a className="text-gray-200/50">Docs</a>
                <a className="text-gray-200/50">Private Cloud</a>
            </nav>
            <div className="flex gap-7 items-center justify-center">
            <button className="text-gray-200/50">Sign in</button>
            <button className="text-gray-200/50 border border-gray-200/20 px-5 py-1 rounded-xl">Sign Up</button>

            </div>
            
        </header>
        <section className="max-w-400 flex flex-col items-center justify-between w-full h-[calc(100vh-80px)] max-h-screen">
            <div className="flex flex-col items-start justify-center flex-1  w-full gap-10">
                <h1 className="text-6xl font-stretch-normal text-white leading-15">The fastest way to deploy and <br/> scale Laravel applications</h1>
                <h3 className="text-md font-light text-white">Deploy your Laravel application without managing servers. <br/> One-click autoscaling, databases, caching, storage and security.<br/>
                Start building with $5 of free usage credit.
                </h3>
                <div className="flex gap-9">
                    <button className="bg-white text-black text-sm px-5 py-2 rounded-xl">
                        Get started
                    </button>
                    <button className=" px-9 py-2 rounded-xl border text-sm border-gray-200/20">
                        Contact Sales
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-80 w-full bg-amber-200 relative rounded-xl">
                <Image
                src="/laravel herosection.png"
                alt="Laravel"
                fill

                />
            </div>
        </section>
    </main>)
}