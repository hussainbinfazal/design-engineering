import Image from "next/image";

export async function Writer() {
    return (
        <main className="min-h-screen flex flex-col items-between justify-between bg-black overflow-hidden">
            <header className="flex flex-row items-center justify-between px-14 py-4">
                <h1 className="text-4xl font-bold text-white">Writer</h1>
                <div className="flex flex-row items-center justify-end gap-4">
                    <nav className="flex flex-row gap-4 text-sm">
                        <a href="#">Product</a>
                        <a href="#">Solutions</a>
                        <a href="#">Research</a>
                        <a href="#">Plans</a>
                        <a href="#">Customers</a>
                        <a href="#">Resources</a>
                    </nav>
                    <button className="px-4 py-2 rounded-full bg-violet-400 text-white">
                        Request a demo
                    </button>
                    <button className="px-4 py-2 rounded-full  text-white">
                        Sign in
                    </button>
                </div>
            </header>
            <section className="flex flex-col items-center justify-start h-screen max-w-3xl mx-auto relative pb-0">
                <div className="flex flex-col items-center justify-center gap-8 min-h-100">
                    <h1 className="text-6xl font-medium text-white text-center leading-18">The enterprise AI platform <br /> for agentic work
                    </h1>
                    <h3 className='text-gray-400 text-center text-sm'>
                        Global 2000 enterprises trust WRITER to transform what basic automation tools <br />
                        never could - from campaigns and RFPs to personalized comms and research.
                    </h3>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <button className="px-4 py-2 rounded-full bg-white text-black">Request a demo</button>
                        <button className="px-4 py-2 rounded-full  text-white border-2 border-white">Try for free</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center mt-0 object-cover gap-20 w-full h-full" > <div className="flex flex-col items-center justify-center ">
                    <p className="text-6xl font-bold text-white" style={{ fontVariantNumeric: "slashed-zero" }}>70% </p> 
                    <span className="text-sm text-white text-center leading-4">
                        time savings on <br />derivative <br /> content creation
                    </span>

                </div>
                    <div className="relative">
                        {/* Glow */}
                        <div
                            className="
                                      absolute
                                      bottom-0
                                      left-1/2
                                      -translate-x-1/2
                                      w-200
                                      h-67.5
                                      bg-orange-300
                                      blur-[100px]
                                      opacity-50
                                      rounded-full
                                      z-0"
                        />

                        <Image
                            src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkeSUyMGluJTIwZm9ybWFsJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D"
                            alt="Lady"
                            width={300}
                            height={300}
                            className="relative z-10 rounded-full"
                        />
                    </div>



                    <p className="text-right text-xl">
                        Lauren Boyman <br />
                        <span className="text-sm">
                            CMO,KPMG Americas
                        </span>

                    </p>
                </div>

            </section>
        </main>
    )
}