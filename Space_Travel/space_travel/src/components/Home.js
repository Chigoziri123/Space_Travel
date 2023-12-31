import { Link } from "react-router-dom"
import background_Image from "../starter-code/assets/home/background-home-mobile.jpg"

export default function Home() {
  return (
    <>
        <section className="home px-5">
           <div className="overlay" 
                style={{ 
                backgroundImage: `url(${background_Image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "calc(100vh + 1px)",
                }}>
                <article className="lg:w-1/2 lg:mr-20">
                    <h1 className="text-2xl text-gray-400"> SO YOU WANT TO TRAVEL TO <span className="block text-4xl lg:text-6xl text-white mt-5 mb-10">SPACE</span></h1>
                    <p className="text-gray-400">Let's face it; if you want to go to space, you might
                        as well genuinely go to the outer space and not
                        hover kind of on the edge of it. Well, sit back,
                        and relax because we'll give you a truly out of 
                        this world experience!
                    </p>
                </article>

                <article className="mt-20">
                    <button className="w-48 h-48 rounded-full bg-white text-gray-800 uppercase font-bold text-4xl lg:text-5xl animate-pulse">
                        <Link to="/destination">
                            Explore
                        </Link>
                    </button>
                </article>
            </div> 
        </section>
    </>
    
  )
}