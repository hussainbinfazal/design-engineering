export async function Langchain() {
    return (<main className="relative min-h-screen w-full max-w-auto  bg-[#05080D] ">
        <div className="absolute top-0 left-0 h-px w-full bg-gray-700/40" />

        <div className="bg-blue-900 flex items-center justify-center min-h-10 ">
            <p className="text-white text-[10px] font-light">
                Join us on 13th & May 14 at interrupt, the Agent Conference by LangChain
            </p>
        </div>
        <section className="flex flex-1 px-12 flex-col">
            <header className="flex min-h-20 h-20 max-h-25 justify-between items-center w-full border border-white/20 rounded-sm px-4">
                <h1 className="text-2xl font-light">Langchain</h1>
                <nav className="flex gap-6 text-sm">
                    <a>Products</a>
                    <a>Learn</a>
                    <a>Docs</a>
                    <a>Company</a>
                    <a>Pricing</a>
                </nav>
                <div className="flex gap-5">
                    <button className="bg-white/90 px-6 py-3 text-black rounded-lg">Try LangSmith</button>
                    <button className="border border-white/20 px-6 py-3 text-white rounded-lg">Get a demo</button>
                </div>
            </header>
            <section
                className="min-h-100 max-h-120 max-w-4xl mx-auto  flex flex-col items-center justify-center gap-8">
                <h2 className="text-[72px] text-[#D5E8E3]
leading-19.5
tracking-[-2px]
font-medium" style={{
  textShadow:
    "0 0 12px rgba(180,255,240,0.18), 0 0 30px rgba(180,255,240,0.08)"
}}>
                    Ship agents that wow
                </h2>
                <h3 className="tracking-widest font-medium">
                    observe, evaluate, and deploy agents with <br />
                    Langsmith, the agent engineering platform.
                </h3>
                <div className="flex gap-5">
                    <button className="bg-white/90 px-6 py-3 text-black rounded-lg">Start Building</button>
                    <button className="border border-white/20 px-6 py-3 text-white rounded-lg">Get a demo</button>
                </div>
            </section>
            <section className="relative h-[calc(100vh-200px)] w-full overflow-visible bg-[#05080D] py-2 z-0">
                {/* Top Divider */}
                <div className="absolute top-0 left-0 h-px w-full bg-gray-700/40" />

                <svg
                    viewBox="0 0 1440 500"
                    className="absolute inset-0 h-full w-full z-0"
                    preserveAspectRatio="none"
                   
                >
                    <defs>
                        {/* Glow */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Gradient */}
                        <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#C6F6FF" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#7DE7FF" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>

                    {/* LEFT CURVES */}

                    <path
                        d="M0 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                    
                    <path
                        d="M230 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                   

                    <path
                        d="M420 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                    {/* RIGHT CURVES */}

                    <path
                        d="M1440 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                    

                    <path
                        d="M1210 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                   
                    <path
                        d="M1020 0 Q720 0 720 250"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />

                    {/* Vertical Beam */}

                    <line
                        x1="720"
                        y1="250"
                        x2="720"
                        y2="500"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />
                </svg>

                {/* Pills */}

                <div className="absolute top-0 left-[15%] -translate-y-1/2 rounded-full border border-gray-700 bg-[#161616] px-5 py-2 text-xs text-gray-300 ">
                    Build
                </div>

                <div className="absolute top-0 left-[25%] -translate-y-1/2 rounded-full border border-gray-700 bg-[#161616] px-5 py-2 text-xs text-gray-300 z-10">
                    Observe
                </div>

                <div className="absolute top-0 left-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-700 bg-[#161616] px-5 py-2 text-xs text-gray-300 z-10">
                    Evaluate
                </div>

                <div className="absolute top-0 left-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-700 bg-[#161616] px-5 py-2 text-xs text-gray-300 z-10">
                    Deploy
                </div>
            </section>
        </section>
    </main>)
}