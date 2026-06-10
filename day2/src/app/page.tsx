

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-white px-10 py-12">
      <div className="flex h-full w-full items-center justify-between">
        <h1 className="text-sm font-semibold text-gray-800">Palet Ross</h1>
        <nav className="flex gap-6 text-black ">
          <a href="#">Get Started</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className= "flex items-center justify-center w-full h-full p-30">
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-6xl font-light leading-tight text-center text-black">A place to display your masterpiece</h1>
          <p className="text-gray-500 text-lg text-center ">Artists can display their masterpieces, and buyers can discover</p>
        </div>
      </div>
    </div>
  );
}
