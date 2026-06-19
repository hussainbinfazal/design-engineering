export function Spade() {

    return (
        <main className="flex flex-col justify-start items-center h-screen w-full bg-white px-0 py-0">
            <section

                className="relative w-full h-full px-0 py-0 rounded-md flex flex-col gap-0 bg-white">
                <header className="flex w-full items-center justify-between px-14  py-2 rounded-none bg-transparent min-h-10 max-h-1/5 backdrop-blur-2xl z-10">
                    <div className="flex h-full w-full items-center justify-between"><h1 className="text-5xl font-medium text-green-950 italic z-10">Spade</h1>
                        <nav className="flex gap-6 text-black text-sm font-light">
                            <a href="#">Solution</a>
                            <a href="#">Customers</a>
                            <a href="#">Compnay</a>
                            <a href="#">Docs</a>
                        </nav>
                        <div className="flex gap-4 items-center">

                            <button className="px-4 py-2 rounded-full backdrop-blur-3xl bg-white/50 text-black">Contact Sales</button>

                        </div>
                    </div>
                </header>
                <div className="flex  items-center justify-center w-full h-full    p-10 gap-3  z-10   bg-[#F4D6B2]/60">

                    <div className="flex flex-col gap-0 bg-transparent rounded-md w-3/5 h-full justify-between items-center ">

                        <div className="flex flex-col gap-4   items-center justify-between px-0 py-10 rounded-md text-white w-full ">
                            <h1 className="text-6xl font-medium leading-tight text-center text-black ">The data & AI platform<br />for Modern finance
                            </h1>
                        </div>

                        <div className= 'flex flex-col gap-4   items-center justify-between px-0 py-10 rounded-md text-white w-full'>
                            <h3 className="text-sm font-light leading-tight text-center text-black px-19">Spade takes messy transactions data turns it into structured,<br/> verified records - with AI agents that help you to use it everywhere it matters.  </h3>
                            <button className="  px-11 py-3 flex items-center justify-center rounded-md bg-green-900 text-lg">
                                Contact Sales
                            </button>
                        </div>
                    </div>


                </div>


            </section >
        </main>
    );

} 