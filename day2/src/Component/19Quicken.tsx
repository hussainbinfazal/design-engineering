import Image from "next/image";

export async function Quicken() {
    return (
        <main className="flex flex-col items-start justify-start min-h-screen bg-white   w-full px-18 overflow-hidden">
            <header className="max-w-400 flex items-center justify-between w-full min-h-20 max-h-20 px-14 py-2 z-10">
                <div className="flex gap-6 items-center justify-start">
                    <h1 className="text-2xl font-medium text-purple-700">Quicken</h1>
                    <nav className="flex gap-6 items-center justify-center text-sm">
                        <a className="text-black">Our Products</a>
                        <a className="text-black">Top Features</a>
                        <a className="text-black">Support</a>
                    </nav>
                </div>
                <div className="flex gap-4 items-center justify-end">
                    <button className="px-4 py-2 rounded-xl bg-white text-black text-sm">
                        Log in
                    </button>
                    <button className="px-7 py-1 rounded-xl  text-white bg-purple-700 text-sm">
                        Sign up
                    </button>
                </div>
            </header>
            <section className="bg-[linear-gradient(180deg,#4030A8_0%,#1D2059_40%,#08111D_75%,#000000_100%)] flex flex-col items-start justify-start w-full h-[calc(100vh-20px)] px-19 relative pb-8 overflow-hidden">
                <Image
                    src="/mobile-phone.png"
                    width={600}
                    height={500}
                    className="absolute right-18 bottom-0  rotate-9
        drop-shadow-2xl invert opacity-50"
                    alt=""
                />
                <div className="flex flex-1 flex-col items-start justify-start py-8 gap-5 z-10 ">
                    <button className="px-5 py-2 rounded-lg bg-green-300 text-black text-sm font-semibold">Trusted by over 20 million customers</button>
                    <h2 className='font-bold text-6xl text-white mt-4 tracking-widest'>See the future of <br /> your finances & <br /> stay ahead</h2>
                    <h3 className="text-white text-lg mt-4 tracking-widest">Mostfinance apps look backward. Quicken shows <br /> Where your finances are going - so you can make <br /> confident, stress-free decisions.</h3>
                </div>
                <div className="w-full h-120  tracking-widest font-serif pb-9 flex gap-9 z-10 ">
                    <div className="h-120 w-120 bg-white rounded-3xl px-6 py-4 flex flex-col gap-6">
                        <p className="text-black font-semibold text-sm ml-6">Personal</p>
                        <h3 className="text-black font-semibold text-lg font-serif tracking-wide">The gold standard fo personal finance apps</h3>
                        <p className="text-gray-800 font-semibold text-sm font-serif tracking-widest ">Mobile Web</p>
                        <p className="text-black font-medium text-sm font-serif tracking-wide ml-6">See all your finances in one place-banking, investments & more</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">Understand what matters and why</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">See what's ahead with clear projections</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">Make smarter decisions and grow your net worth.</p>
                        <div className="flex gap-4 flex-1 items-center justify-between">
                            <button className="px-5 py-2 w-1/2  bg-violet-700 rounded-full text-white text-[ text-sm font-semibold">Get started</button>
                            <button className="px-5 py-2 w-1/2  border border-violet-700 rounded-full text-violet-700 text-[ text-sm font-semibold">Get started</button>
                        </div>

                    </div>
                    <div className="h-120 w-120 bg-white rounded-3xl px-6 py-4 flex flex-col gap-6">
                        <p className="text-black font-semibold text-sm ml-6">Personal</p>
                        <h3 className="text-black font-semibold text-lg font-serif tracking-wide">The gold standard fo personal finance apps</h3>
                        <p className="text-gray-800 font-semibold text-sm font-serif tracking-widest ">Mobile Web</p>
                        <p className="text-black font-medium text-sm font-serif tracking-wide ml-6">See all your finances in one place-banking, investments & more</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">Understand what matters and why</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">See what's ahead with clear projections</p><p className="text-black font-medium text-sm font-serif tracking-wide ml-6">Make smarter decisions and grow your net worth.</p>
                        <div className="flex gap-4 flex-1 items-center justify-between">
                            <button className="px-5 py-2 w-1/2  bg-violet-700 rounded-full text-white text-[ text-sm font-semibold">Get started</button>
                            <button className="px-5 py-2 w-1/2  border border-violet-700 rounded-full text-violet-700 text-[ text-sm font-semibold">Get started</button>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}