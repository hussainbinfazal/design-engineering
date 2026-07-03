import Image from "next/image";

export async function Tidal() {
    return (
        <main className="flex min-h-screen h-full w-screen flex-row items-start justify-between p-2 bg-black overflow-none">

            <div className="flex flex-col items-start justify-start min-w-50 max-w-60 min-h-screen bg-black border-r border-gray-200/15 gap-4">
                <section className="flex flex-col items-start justify-start w-full h-full gap-4 px-2">
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


                </section>
            </div>

            <div className="w-screen h-full overflow-none">
                <header className="flex items-center justify-between  w-full min-h-10   text-white text-xl font-semibold px-4">
                    <p className="text-gray-200/75 ">Discover</p>
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center justify-start  w-full min-h-10 border-b border-gray-200/15 bg-gray-200/10
                              text-gray-200/75 text-medium font-light px-4 rounded-full">
                            <input className=" text-white focus:outline-none placeholder:text-gray-200/50 placeholder:text-sm placeholder:px-1" placeholder="Search" />
                        </div>
                        <button className="px-6 py-3 bg-gray-200/15 rounded-full text-gray-200/85 font-light text-[10px] whitespace-nowrap">Download TIDAL</button>
                        <button className="px-6 py-3 bg-gray-200/15 rounded-full text-gray-200/85 font-medium text-[12px] whitespace-nowrap">LogIn</button>
                        <button className="px-6 py-3 bg-white rounded-full text-black font-light text-[10px] whitespace-nowrap">Create a free account</button>
                    </div>
                </header>
                <section className="flex flex-col items-start justify-start w-full h-full min-h-screen gap-4 px-6 py-4 overflow-hidden">
                    <div className="max-w-6xl w-full h-full max-h-60 flex items-start justify-between gap-4 bg-red-500 rounded-2xl p-4">
                        <span className="flex flex-col items-start justify-start gap-2 w-1/3">
                            <p className="text-4xl font-bold">Spotlight</p>
                            <p className="text-sm">
                                Where emerging voices find their stage
                            </p>
                        </span>
                        <span className="min-h-54 w-1/3 relative">
                            <Image src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tidal" fill className="rounded-2xl opacity-75 object-contain" />
                        </span>
                        <span className="w-1/4 min-h-50 h-full flex flex-col items-start justify-end gap-5">
                            <p className="text-[9px] ">
                                spotlight is a platform that showcases emerging artists and their music, providing them with a stage to reach a wider audience. It features curated playlists, exclusive content, and interviews with up-and-coming musicians, helping to promote new talent in the music industry.
                            </p>
                            <button className="px-6 py-3 bg-white rounded-full text-black font-light text-[10px] whitespace-nowrap">Create a free account</button>
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-gray-200/15 rounded-full text-gray-200/85 font-medium text-[12px] whitespace-nowrap">For you</button>
                        <button className="px-6 py-3 bg-gray-200/15 rounded-full text-gray-200/85 font-medium text-[12px] whitespace-nowrap">Staff Picks</button>
                        <button className="px-6 py-3 bg-white rounded-full text-black font-light text-[10px] whitespace-nowrap">Uploads</button>
                    </div>
                    <div className="max-w-6xl w-full h-full max-h-100 flex flex-col items-start justify-between gap-4 bg-gray-200/10 rounded-2xl p-4 overflow-hidden">

                        <p className="text-lg font-semibold">Uploads For purchase</p>
                        <div className="min-h-174 w-full h-full grid grid-cols-6  gap-4 overflow-x-none overflow-y-hidden  scrollbar-none scrollbar-thumb-gray-200/25 scrollbar-track-gray-200/10">
                            <div className="w-36  flex flex-col gap-2 overflow-hidden">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-none overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                            <div className="w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop"
                                        alt="Album"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <h3 className="text-sm font-medium text-white">De To</h3>

                                <p className="text-xs text-gray-400">Nino Augustine</p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </main>
    )
}