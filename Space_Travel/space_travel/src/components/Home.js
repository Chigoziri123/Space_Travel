import { Link } from "react-router-dom"
import background_Image from "../starter-code/assets/home/background-home-desktop.jpg"

export default function Home() {
  return (
    <>
        <section className="Home relative">
           <div className="overlay flex flex-col items-center justify-center" 
                style={{ 
                backgroundImage: `url(${background_Image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "calc(100vh + 1px)",
                }}>
                <article>
                    <h1 className="text-2xl text-gray-400"> SO YOU WANT TO TRAVEL TO <span>SPACE</span></h1>
                    <p>Let's face it; if you want to go to space, you might
                        as well genuinely go to the outer space and not
                        hover kind of on the edge of it. Well, sit back,
                        and relax because we'll give you a truly out of 
                        this world experience!
                    </p>
                </article>

                <article>
                    <button className="mt-4">
                        <Link to="/destination" className="px-4 py-2 bg-blue-500 text-white">
                            Explore
                        </Link>
                    </button>
                </article>
            </div> 
        </section>
    </>
    
  )
}