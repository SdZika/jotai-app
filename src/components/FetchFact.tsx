import { useState  } from "react"

export const FetchFact = () => {

          const [ fact, setFact ] = useState("")

          const fetchData = async () => {
                    const response = await fetch("https://catfact.ninja/fact")
                    const data = await response.json()
                    setFact(data.fact)
          }

          return(
                    <div>
                              <button onClick={fetchData}>Update Cat Fact </button>
                              <p>{fact}</p>
                    </div>
          )
}