import Image from "next/image";

export async function Kamoot() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-[url('https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww')] bg-cover bg-center relative z-0 px-4">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
            <header className="flex flex-row items-center justify-between  py-4 w-full max-h-20 z-10">
                <h1 className="text-3xl font-bold text-white">kamoot</h1>
                <div className="flex flex-row items-center justify-end gap-4">
                    <nav className="flex flex-row gap-4 text-sm">
                        <a href="#">Product</a>
                        <a href="#">Solutions</a>
                        <a href="#">Features</a>
                        <a href="#">Updates</a>
                    </nav>
                    <button className="px-4 py-2 rounded-xl bg-white text-black text-sm">
                        Request a demo
                    </button>
                    <button className="px-4 py-2 rounded-xl  text-white bg-green-950 text-sm">
                        Log in or Sign up
                    </button>
                </div>
            </header>
            <section className="w-full h-screen max-w-250 max-h-250 flex flex-col items-center justify-center z-10 gap-6 ">.
         
                <h1 className="text-7xl font-light text-white text-center leading-20">Explore Beyond <br /> the map</h1>
                <div className="flex flex-row items-center justify-center gap-4 mt-4">
                    <button className="px-4 py-2 rounded-xl bg-white text-black text-semibold text-sm">
                        Signup for Free
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-green-950 text-white text-semibold text-sm">
                        Login
                    </button>

                </div>
            <h3 className="text-white text-center text-[10px] z-10">Where will you explore next?</h3>
            </section>
        </main>
    )
}



