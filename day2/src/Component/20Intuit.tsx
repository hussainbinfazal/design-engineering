import Image from "next/image";

export async function Intuit() {
    return <main className="min-h-screen w-full flex flex-col">
        <div className="min-h-15 w-full h-20 bg-white/80">
            <button className="bg-green-500 px-4 py-2 font-medium">SALE</button>
            <p> Buy now and save <span className="font-bold">save 70% off today</span> See plan & pricing</p>
        </div>
        <section className="w-full flex flex-col min-h-[calc(100vh-80px)] bg-linear-to-b from-black to-blue-500">
            <header className="h-20 w-full
             bg-white">
                <h1>Intuit</h1>
                <nav>
                    <a href="#">For Business</a>
                    <a href="#">Accountants</a>
                    <a href="#">Pricing</a>
                    <a href="#">Learn & Support</a>
                </nav>
            </header>
            <div className="flex flex-1 items-stretch justify-between bg-red-900">
                <div className="min-w-1/2 flex flex-col items-center justify-center bg-green-500">
                    <h2>Automation where it<br /> counts. Human when it <br /> matters</h2>
                    <h3>Save time and unlock growth with integrated business tools with AI <br /> and automation, all in one place</h3>
                    <button className=" bg-green-600 px-4 py-2 text-black" >See plans and pricing</button>
                </div>
                <div className=" bg-yellow-900 relative min-w-1/2  flex flex-col items-center justify-center">
                    <Image
                        src="/intuit.png"
                        alt="Testemonial Image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

        </section>
    </main>
}