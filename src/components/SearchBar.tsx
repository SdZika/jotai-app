import { useState } from "react"

export const SearchBar = () => {

  const myFruits = ["bananas", "apples", "lemon", "orange"]

  const [ query, setQuery ] = useState<string>("")


  const filteredFruits = myFruits.filter((fruit) => fruit.includes(query))

  return (
    <div>
          <h1>Search Bar</h1>
          <input type="text"  value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find Data" />
          { filteredFruits.map((item,index) => (
                    <p key={index}>{item}</p>
          ))}
    </div>
  )
}
