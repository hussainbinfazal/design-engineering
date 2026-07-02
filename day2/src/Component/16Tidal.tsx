export async function Tidal() {
    return (
        <main className="flex min-h-screen h-full w-screen flex-row items-start justify-between p-2 bg-black">
          
            <div className="flex flex-col items-start justify-start min-w-50 max-w-60 min-h-screen bg-black border-r border-gray-200/15 gap-4">
                <div className="flex flex-col items-start justify-start w-full h-full gap-4 px-2">
                    <div className="flex items-center justify-start  w-full min-h-10   text-white text-xl font-semibold px-4">
                        Tidal
                    </div>
                     <div className="flex flex-col items-start justify-start w-full h-full text-gray-200/75   text-[14px] font-light px-4 gap-4 py-2">
                        <a>
                            Music
                        </a>
                        <a>
                            Explore
                        </a>
                        <a>
                            Feed
                        </a>
                        <a>
                            Collection
                        </a>
                        <a>
                            Upload
                        </a>
                    </div>
                    <div className="flex items-center justify-start  w-full min-h-10 border-b border-gray-200/15  text-gray-200/75 text-medium font-light px-4">
                        <p>Playlist</p>
                    </div>
                    <div className="flex flex-col gap-6 items-start py-2 justify-start  w-full min-h-30 border rounded-2xl border-gray-200/25  text-gray-200/95 text-sm font-light px-4">
                        <p>Transform you music</p>
                        <button className="px-9 py-3 bg-gray-200/15 rounded-3xl">Get Started</button>
                    </div>

                </div>
            </div>
          
            <div className="w-screen h-full">
                <div className="flex items-center justify-start  w-full min-h-10   text-white text-xl font-semibold px-4">
                        <p className="text-gray-200/75 ">Discover</p>
                        <div>
                            <div className="flex items-center justify-start  w-full min-h-10 border-b border-gray-200/15  text-gray-200/75 text-medium font-light px-4">
                                <input className="bg-gray-200/15 placeholder:text-gray-200/50 text-white focus:outline-none" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}