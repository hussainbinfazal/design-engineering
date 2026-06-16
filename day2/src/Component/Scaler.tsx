export async function Scaler() {

    return (
        <main className="flex flex-col justify-start items-center min-h-screen bg-white px-10 py-4">
            <section className="relative bg-linear-to-b from-black to-gray-900  w-full px-8 py-4 rounded-t-sm flex flex-col gap-0 min-h-screen 
    overflow-hidden">
                <header className="flex h-full w-full items-center justify-between px-8  py-4 rounded-full bg-transparent max-h-3/5 ">
                    <h1 className="text-3xl font-semibold text-white italic">scalar</h1>
                    <nav className="flex gap-10 text-white text-sm font-light border-2 border-white/50 rounded-full p-3">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button className="px-6 py-2 rounded-full border-1 border-white/50 text-white bg-gradient-to-b from-blue-900 to-blue-800">Contact Us</button>
                </header>
                <div className="flex flex-col items-center justify-center w-full h-full p-30 gap-10 -mt-15">
                    <span>
                        <h3 className="text-sm font-medium leading-tight text-center text-gray-600  ">NEXT-SAAS & E-COMMERCE DEVELOPMENT AGENCY <span className="font-light italic">pros</span> for your brand</h3>
                    </span>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-6xl font-medium leading-tight text-center text-white">Smart UX. Flexible tech. <br /> <span className="font-light italic"> Higher conversions</span></h1>
                    </div>
                    <span>
                        <h3 className="text-sm font-light leading-tight text-center text-white ">Certain areas of your home might require extra care <span className="font-light italic">pros</span> for your brand</h3>
                    </span>
                    <div className="flex items-center justify-center w-full h-full gap-6 -mt-10">
                        <button className="px-10 py-3 rounded-full bg-gradient-to-b from-blue-900 to-blue-800 text-sm text-white mt-10 border-1 border-white/50">
                            Start with a conversation

                        </button>

                    </div>


                </div>

                {/* Wave glow section */}
                {/* Wave glow section */}
                <div className="absolute inset-x-0 bottom-0 h-[280px]">

                    {/* Glow layer */}
                    <div className="absolute inset-0">
                        <div className="absolute left-[-5%] bottom-[60px] w-[40%] h-[220px] rounded-full bg-cyan-300 blur-[90px] opacity-60" />
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] w-[25%] h-[180px] rounded-full bg-purple-700 blur-[80px] opacity-50" />
                        <div className="absolute right-[-5%] bottom-[60px] w-[40%] h-[220px] rounded-full bg-blue-500 blur-[90px] opacity-60" />
                    </div>

                    {/* Terrain wave — beige/sand hill that rises from bottom */}
                    <svg
                        viewBox="0 0 1440 280"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 left-0 w-full h-full"
                        preserveAspectRatio="none"
                    >
                        {/* Main sandy terrain fill */}
                        <path
                            d="M0,280 L0,200 C80,195 160,175 280,165 C400,155 480,160 560,168 C640,176 700,188 780,185 C860,182 940,168 1040,158 C1140,148 1280,152 1440,165 L1440,280 Z"
                            fill="#f1ece3"
                        />
                        {/* Slightly darker ridge for depth */}
                        <path
                            d="M0,215 C80,208 160,188 280,178 C400,168 480,172 560,180 C640,188 700,198 780,196 C860,194 940,180 1040,170 C1140,160 1280,163 1440,176"
                            fill="none"
                            stroke="hsl(45, 22%, 97%)"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
            </section >

        </main>
    );

} 