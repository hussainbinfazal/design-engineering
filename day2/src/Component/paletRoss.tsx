export async function PaletRoss(){
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
    return(
   
    <main className="flex flex-col justify-start items-start min-h-screen bg-white px-10 py-12">
      <header className="flex h-full w-full items-center justify-between px-10">
        <h1 className="text-sm font-semibold text-gray-800">Palet Ross</h1>
        <nav className="flex gap-6 text-black ">
          <a href="#">Get Started</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className= "flex items-center justify-center w-full h-full p-30">
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-8xl font-light leading-tight text-center text-black">A place to display your <br/> masterpiece</h1>
          {/* Parent Container */}
          <div className="relative w-[700px] h-[300px] bg-red">
          {cards.map((card,index) => (
              <div className={`absolute w-[220px] h-[240px] rounded-4xl  overflow-hidden transition-all
duration-300
hover:-translate-y-4
hover:scale-105`}  style={{
                  left: `${index * 150}px`,
                  transform:`rotate(${(index - 3) * 8}deg)`,
                }}>
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
               
              />
            </div>
          ))}
          </div>
          <p className="text-gray-500 text-lg text-center ">Artists can display their masterpieces, and buyers can discover</p>
          <section className="flex items-center justify-center gap-4">
            <button className="bg-black text-sm text-white px-6 py-3 rounded-full">
             Join for $9.99/mo
            </button>
            <button className="bg-white text-sm text-gray-600 px-6 py-3 rounded-full">
              Read More
            </button>
          </section>
        </div>
      </section>
      <footer>

      </footer>
    </main>
  );                    
    
}