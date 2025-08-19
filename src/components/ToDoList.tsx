import { useState } from "react"

export const ToDoList = () => {


  const [ text, setText] = useState("")

  const [ toDo, setToDo ] = useState<string[]>([])

  const submitToDo = () => {
      
      setToDo([...toDo, text])

      setText("")
  }


  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add To List" />
       <button onClick={submitToDo}>Submit</button>
       { toDo.map((item, index) => (
          <p key={index}>{item}</p>
       ))}
    </div>
    
  )

}