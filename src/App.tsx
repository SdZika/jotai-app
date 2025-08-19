
import './App.css'
import { BarChart } from './components/BarChart'
import { CounterAtom } from './components/CounterAtom'
import { CounterAtomChild } from './components/CounterAtomChild'

function App() {

  const data = [12, 25, 6, 30, 18, 22];

  return (
    <>
      <h1>Hello World!</h1>
      <CounterAtom />
      <CounterAtomChild />
      <div style={{marginTop: "20px"}}>
      <BarChart data={data} width={500} height={300} />
      </div>
    </>
  )
}

export default App
