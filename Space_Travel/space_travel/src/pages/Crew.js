import { useState } from "react"
import data from "../starter-code/data.json"

export default function Crew() {
    const [people] = useState(data.crew) 
    const [value, setValue] = useState(0)
  
    if (value < 0 || value >= people.length) {
      setValue(0)
    }
  
    const {name, images, role, bio} = people[value]
    return (
      <>
        <section className="home destination px-5">
          <h1>02 Meet your Crew</h1>
  
          <div className="md:grid grid-cols-2 md:items-center
          lg:max-w-7xl lg:mx-auto lg:pt-40">
            <article>
              <img src={images.png} alt={name} title={name} 
              className="block mx-auto w-3/4 mb-10"/>
            </article>
  
            <article className="text-center lg:text-left">
              {people.map((item, index) => (
                <button key={index} onClick={() => setValue(index)}
                className={`uppercase text-white text-2xl pb-2 mx-2 ${index === value && "border-b border-white"}`}>
                  {item.name}</button>
              ))}
              <h2 className="text-5xl font-bold text-white mt-10 uppercase tracking-widest ">{name}</h2>
              <p className="text-gray-400">{bio}</p>
            </article>
          </div>
        </section> 
  
      </>
    )
  }