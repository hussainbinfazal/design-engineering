import { JSX } from "react/jsx-runtime";

export function Immediate(): JSX.Element {
    return (
        <main className = "min-h-screen flex flex-col items-between justify-between bg-[#E8C088]">
            <header className="flex justify-between items-center px-8 py-8">
                <h1 className="text-3xl text-emerald-900">
                    Immediate
                </h1>
                <nav className="flex bg-green-300/20 text-emerald-900 gap-8 px-8 py-3 rounded-full text-sm" >
                    <a href="#">Solution</a>
                    <a href="#">For Enterprises</a>
                    <a href="#">Blog</a>
                    <a href="#">Partnerships</a>
                    <a href="#">Contact</a>
                </nav>
                <button className="bg-emerald-900 text-white px-8 py-3 text-sm rounded-full">
                    Schedule Demo 
                </button>
            </header>
            <section className="flex flex-col items-center">
                <h2 className="text-emerald-900 text-6xl text-center font-medium">
                    A better way to offer pay access <br/>
                    to your teams
                </h2>
                <p className="text-emerald-900 my-4 text-center font-medium text-[12px] ">
                    Immediate offers access to employees with the lowest-risk <br/> and lowest cost to employees in the market
                </p>
                <div className="flex gap-4">
                    <button className="bg-emerald-900 text-white px-5 py-2 text-sm rounded-full">
                        Get Started
                    </button>
                    <button className=" font-medium bg-green-300/30 px-7 py-3 text-sm rounded-full text-emerald-900">
                        See how it works
                    </button>
                </div>
                <img
                src={"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={"image"}
                className=" h-100 w-180 rounded-2xl max-w-200 max-h-100 object-cover mx-4 my-4"
               
              />
            </section>

        </main>
    );
}