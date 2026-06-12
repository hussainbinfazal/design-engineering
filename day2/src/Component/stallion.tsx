export async function Stallion() {
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
           <section className="bg-linear-to-b from-blue-400 to-white h-full w-full px-8 py-4 rounded-t-sm flex flex-col gap-8">
             <header className="flex h-full w-full items-center justify-between px-8  py-4 rounded-full bg-white max-h-3/5">
                <h1 className="text-3xl font-semibold text-gray-800 italic">Stallion</h1>
                <nav className="flex gap-6 text-black text-sm font-light">
                    <a href="#">Home</a>
                    <a href="#">Works</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                </nav>
                <button className="px-6 py-2 rounded-full bg-black text-white">Get in Touch</button>
            </header>
            <div className="flex flex-col items-center justify-center w-full h-full p-30 gap-18">
                <span className="text-sm font-semibold text-gray-800 italic px-6 py-2 bg-orange-300/90 rounded-full my-5 border border-orange-500">
                    100% Satisfaction rate over 500+ project
                </span>
                <div className="flex flex-col gap-4">
                    <h1 className="text-7xl font-bold leading-tight text-center text-black">Building High-Impact <span className="font-light italic">Digital</span> <br/> <span className="font-light italic"> Products</span> for your brand</h1>
                </div>
                <button className="px-9 py-3 rounded-full bg-orange-500 text-white mt-10">
                    Start a Project
                </button>
                
            </div>
           </section >
            <section className="mx-40 my-40">
                <div className="flex flex-col gap-4 h-full">
                    
                    {/* Parent Container */}
                    <div className="relative w-full h-75 bg-red flex overflow-x-auto gap-4 ">
                        {cards.map((card, index) => (
                            <div className={` w-55 h-75 rounded-4xl  overflow-hidden transition-all
duration-300
hover:-translate-y-4
hover:scale-105`} >
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-full h-full object-cover"

                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer>

            </footer>
        </main>
    );

} 