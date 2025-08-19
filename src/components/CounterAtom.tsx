import { useAtom } from "jotai";
import { countAtom } from "../atoms/counter";

export const CounterAtom = () => {
  const [count, setCount ] = useAtom(countAtom)

  return (
    <div>
      <p >{count}</p>
      <button onClick={() => setCount(count + 1)}>Incriment</button>
    </div>
  )
}
