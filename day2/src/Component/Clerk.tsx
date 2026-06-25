export async function Clerk(){
    return (
        <main className="flex flex-col items-center justify-start min-w-screen min-h-screen overflow-hidden px-14 py-2 bg-white" >
            <div className="min-h-screen min-w-250 max-w-380"> 
                <header className="w-full h-15 flex justify-between items-center border-b ">
                    <div className="flex gap-10 items-center">
                        <h1 className="text-2xl font-semibold text-black">clerk</h1>
                        <nav className="flex gap-6 text-black text-sm font-light">
                            <a href="#">Products</a>
                            <a href="#">Docs</a>
                            <a href="#">Changelog</a>
                            <a href="#">Company</a>
                            <a href="#">Pricing</a>
                        </nav>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="px-4 py-2  text-black text-sm">
                           Sign in
                        </button>
                        <button className="px-4 py-1 rounded-lg border border-black  text-black text-sm">
                            Start Building
                        </button>
                    </div>

                </header>
                <section className="w-full h-full flex flex-col items-center justify-center" >
                    <div className="flex flex-col gap-5 min-h-100 w-full items-center justify-center ">
                        <h1 className="text-6xl font-semibold text-center text-black leading-15"> 
                            More than authentication,<br/>
                            Complete User Management
                        </h1>
                        <h3 className="text-sm font-light text-center text-black leading-5">
                            Need More that sign-in? Clerk gives you full stack auth user management- <br/> so you can launch faster,scale easier, and stay focused on building your business
                        </h3>
                        <div className="flex gap-4 items-center">
                            <button className="px-4 py-1 rounded-lg border border-black  text-white text-[15px] bg-purple-400">
                                Start Building for free
                            </button>
                            <button className="px-4 py-1 rounded-lg border border-black  text-black text-[15px] ">
                                Build with agents
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-px
  w-full my-auto ">

                        <div className="flex flex-col gap-5 items-start justify-center text-black text-sm text-left border border-gray-100 h-30 font-medium pl-2">
                            Trusted by fast growing <br/> companies around the world 
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm border border-gray-100 h-30 font-bold">
                           inngest
                        </div>
                        <div className="flex gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                        durable
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            upstash
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            Cartesia
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-center text-black text-sm text-left border border-gray-100 h-30 font-medium">
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm border border-gray-100/50 h-30 font-bold">
                          
                        </div>
                        <div className="flex gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                       
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-center text-black text-sm text-left border border-gray-100 h-30 font-medium">
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm border border-gray-100/50 h-30 font-bold">
                          
                        </div>
                        <div className="flex gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                       
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            
                        </div>
                        <div className="flex  gap-5 items-center justify-center text-black text-sm  border border-gray-100/50 h-30 font-bold">
                            
                        </div>
                        
                       
                    </div>
                </section>
            </div>
        </main>
    )
}