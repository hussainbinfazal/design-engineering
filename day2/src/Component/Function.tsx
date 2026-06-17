export async function Function() {
    const cards = [
        {
            title: "Card 1",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 2",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 3",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 4",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 5",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Card 6",
            description: "Description of Card 1",
            imageUrl: "https://images.unsplash.com/photo-1664490336676-1680321c3176?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]
    return (
        <main className="flex flex-col justify-start items-center min-h-screen bg-white px-10 py-4">
            <section className="bg-linear-to-b from-green-100 to-white  w-full px-8 py-4 rounded-t-sm flex flex-col gap-0 min-h-screen ">
                <header className="flex h-full w-full items-center justify-between px-8  py-4 rounded-full bg-transparent max-h-3/5 ">
                    <h1 className="text-3xl font-semibold text-gray-800 italic">Neato</h1>
                    <nav className="flex gap-6 text-black text-sm font-light">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button className="px-6 py-2 rounded-full bg-orange-500 text-white">Download App</button>
                </header>
                <div className="flex flex-col items-center justify-center w-full h-full p-30 gap-10 -mt-15">

                    <div className="flex flex-col gap-4">
                        <h1 className="text-6xl font-semibold leading-tight text-center text-black">Find top-rated certified <br /> <span className="font-light italic"> pros</span> for your brand</h1>
                    </div>
                    <span>
                        <h3 className="text-sm font-light leading-tight text-center text-gray-800 ">Certain areas of your home might require extra care <span className="font-light italic">pros</span> for your brand</h3>
                    </span>
                    <div className="flex items-center justify-center w-full h-full gap-6 -mt-10">
                        <button className="px-10 py-3 rounded-full bg-green-300 text-sm text-green-900 mt-10">
                            Download App on 
                            <br/> Google Play
                        </button>
                        <button className="px-10 py-3 rounded-full bg-green-300 text-sm text-green-900 mt-10">
                            Download App on <br/> App Store
                        </button>
                    </div>

                </div>
            <section className="bg-green-800 h-full w-full px-8 py-4 rounded-t-sm flex flex-col gap-8">
                
            </section>
            </section >
            <footer>

            </footer>
        </main>
    );

} 