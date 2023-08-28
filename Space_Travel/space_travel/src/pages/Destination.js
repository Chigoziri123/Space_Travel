import { useState } from "react"
import data from "../starter-code/data.json"

export default function Destination() {
  const [planets] = useState(data.destinations) 
  const [value, setValue] = useState(0)

  const {name, images, description, distance, travel} = 
  planets[value]
  return (
    <>
      <section>
        <h1>01 Pick your destination</h1>

        <div>
          <article>
            <img src={`./images/${images.webp}`} alt={name} title={name} />
          </article>

          <article>

            <h2>{name}</h2>
            <p>{description}</p>
            <ul>
              <li>{distance}</li>
              <li>{travel}</li>
            </ul>
          </article>
        </div>
      </section> 

    </>
  )
}


