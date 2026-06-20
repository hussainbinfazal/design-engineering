export async function Ramp() {

    return (
        <main className="flex flex-col bg-white min-h-screen w-full max-h-300 overflow-hidden no">
            <header className="min-h-18 max-h-20 w-full  text-black flex justify-between items-center px-14 py-2 ">
                <div className="flex gap-4 items-center ">
                    <h2 className="text-3xl text-semibold ">ramp</h2>
                    <nav className="flex gap-4 text-medium pl-4 text-sm">
                        <a>Products</a>
                        <a>Solutions</a>
                        <a>Partners</a>
                        <a>Resources</a>
                        <a>Customers</a>
                        <a>Pricing</a>
                    </nav>
                </div>
                <div className="flex gap-4 text-sm">
                    <button className="text-sm">
                        Sign In
                    </button >
                    <button className="bg-yellow-100 px-4 py-2 text-sm">
                        See a demo
                    </button>
                </div>

            </header>
            <section className="bg-[#FFDEBD]/20
                h-screen
    bg-[radial-gradient(#e5e7eb_1px_2px,transparent_2px)]
    bg-size-[20px_20px] w-full  px-14 py-2 flex flex-col items-start justify-center gap-4">
                <div className="flex flex-col gap-7">
                    <h3 className="text-sm uppercase text-gray-500">
                        Us Corporate Payments Processed By Ramp
                    </h3>
                    <h2 className="text-5xl capitalize text-black">Time is Money. Save Both.</h2>
                    <h3 className="text-2xl capitalize text-gray-500">Cards, expensed, bill payments, and banking - in the blink of AI.</h3>
                    <div className="relative w-1/2 bg-white backdrop-blur-4xl rounded-3xl">
                        <input
                        className="border border-gray-100 rounded-md px-6 py-5 text-gray-500 w-full "
                        placeholder="What your work email?"
                        />
                        <button className="bg-yellow-100 px-4 py-4 text-sm right-1 bottom-2 rounded-lg absolute text-black my-auto mx-auto">
                            See a demo
                        </button>
                    </div>

                </div>
                <div className="w-full h-1/2 bg-amber-50 ">

                </div>
            </section>

        </main>
    )
}