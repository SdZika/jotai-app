import { useEffect, useState } from "react"


export const IntervalComponent = () => {
  
  const [ count, setCount ] = useState(0)

  useEffect(() => {
          const interval = setInterval(() => {
                    setCount(previous => previous + 1)
          }, 1000)
          return () => clearInterval(interval)
  }, [count])

  return (
    <div><h1>IntervalComponent</h1>{count}</div>
  )
}
