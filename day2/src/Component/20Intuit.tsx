export async function Intuit(){
    return <main className="min-h-screen w-full flex flex-col">
        <div className="min-h-15 w-full h-20 bg-white/80">
        <button className="bg-green-500 px-4 py-2 font-medium">SALE</button>
        <p> Buy now and save <span className="font-bold">save 70% off today</span> See plan & pricing</p>
        </div>
        <section className="w-full flex flex-1 bg-linear-to-b from-black to-blue-500">
            <header className="h-20 w-full
             bg-white">
                <h1>Intuit</h1>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <div className="flex flex-1">
                <div className="w-1/2 h-full bg-green-500"></div>
                <div className="w-1/2 h-full bg-white"></div>
            </div>

        </section>
    </main>
}