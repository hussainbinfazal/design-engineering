import Image from "next/image";

export async function Intuit() {
    return <main className="min-h-screen w-full flex flex-col">
        <div className="min-h-15 w-full h-15 bg-white/90 flex justify-center items-center gap-6 text-black">
            <button className="bg-green-500 px-6 py-1 font-medium text-sm">SALE</button>
            <p> Buy now and save <span className="font-bold">save 70% off today</span> See plan & pricing</p>
        </div>
        <section className="w-full realtive flex flex-col min-h-[calc(100vh-80px)] bg-linear-to-b from-black to-blue-400/90">
            <header className="h-20 w-full
             bg-black flex items-center justify-between px-8">
                <h1 className="text-2xl">Intuit</h1>
                <nav className="flex gap-6 text-sm">
                    <a href="#">For Business</a>
                    <a href="#">Accountants</a>
                    <a href="#">Pricing</a>
                    <a href="#">Learn & Support</a>
                </nav>
                <div className="flex gap-6">

                <button>EN</button>
                <button className="px-6 py-1 border-white border">Login</button>
                </div>
            </header>
            <div className="flex flex-1 justify-between items-center px-14">
                <div className="min-w-2/3 min-h-96 flex flex-col items-start justify-center gap-7">
                    <h2 className="text-5xl tracking-widest"><span className="text-green-700">Automation where it</span><br /> <span className="text-green-700">counts</span>. Human when it <br /> matters</h2>
                    
                        <h3>Save time and unlock growth with integrated business tools with AI <br /> and automation, all in one place</h3>
                    <button className=" bg-green-500 px-4 py-2 text-black rounded-sm text-sm font-medium " >See plans and pricing</button>
                    
                </div>
                <div className=" bg-yellow-900 relative min-w-1/3 min-h-96  flex flex-col items-center justify-center">
                    <Image
                        src="/intuit.png"
                        alt="Testemonial Image"
                        fill
                        className=""
                    />
                </div>
            </div>
            <div className="absolute bottom-0 w-full h-20 backdrop-blur-[0px_0px_154px_10px_rgba(46,137,255,1)]"></div>

        </section>
    </main>
}