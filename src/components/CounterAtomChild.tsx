
import { useAtom } from "jotai";
import { countAtom } from "../atoms/counter";

export const CounterAtomChild = () => {
  
  const [count, setCount] = useAtom(countAtom)
  
  return (
    <div>
      <p >{count}</p>
      <button onClick={() => setCount((c: number) => c - 1)}>Decrement</button>
    </div>
  )
}