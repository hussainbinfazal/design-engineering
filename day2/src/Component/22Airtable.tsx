import Image from "next/image";

export async function Airtable() {
    return (
        <main className="min-h-screen min-w-screen bg-white text-black px-8">
            <header className=" flex justify-between items-center min-h-20">
                <div className="flex justify-between items-center gap-8">
                    <h1 className="text-2xl font-bold">Airtable</h1>
                    <nav className="flex gap-5 text-sm leading-relaxed capitalize">
                        <a>Platform</a>
                        <a>Solutions</a>
                        <a>Resources</a>
                        <a>Enterprises</a>
                        <a>Pricing</a>
                    </nav>
                </div>
                <div className="flex gap-4">
                    <button className="border border-black px-6 py-3 rounded-xl">
                        Book Demo
                    </button>
                    <button className="border border-black  bg-black text-white px-6 py-3 rounded-xl">
                        Sign up for free
                    </button>
                    <button className=" text-black">
                        Log in
                    </button>
                </div>
            </header>
            <section className=" min-h-80 flex flex-col max-h-100 max-w-300 mx-auto justify-center items-center gap-6">
                <h2 className="text-4xl leading-normal tracking-normal text-center">All your teams, all their workflows - connected <br/> in one workspace</h2>
                <h3 className="text-gray-700 max-w-2xl text-center text-sm">Build AI powered workflows that unify data, maximize collaboration, and set your teams up for long-term success.</h3>
                <div className="flex gap-4 my-4">
                    <button className="border border-black bg-black text-white px-6 py-3 rounded-xl">
                        Get started for free
                    </button>
                    <button className="border border-black px-6 py-3 text-black rounded-xl">
                        Book a demo
                    </button>
                </div>
            </section>
            <section className="relative flex flex-1 flex-col max-w-300 mx-auto min-h-150 bg-[#FCB589] justify-center items-center rounded-xl px-6">
                <input
                className=" w-150 py-6 my-4 bg-white rounded-lg placeholder:text-lg placeholder:text-black min-h-10 placeholder:px-4"
                type='text'
                placeholder="Surface top SaaS accounts with up-to-date signals"
                />
                <div className="flex flex-1 px-6">
                    <Image
                    alt="Hero"
                    src="/Airtable Hero.png"
                    className="object-contain px-6 my-10"
                    fill
                    />
                </div>
            </section>
        </main>
    )
}