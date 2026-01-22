import { useState } from "react"



export const App = () => {

  const [num, setnum] = useState(0)

  function inc(){
    setnum(num+1)
  }

  function dec(){
    setnum(num-1)
  }
  return (
    <div>
      <h1>The value of num is: {num}</h1>
      <button onClick={inc} >Incriment</button>
      <button onClick={dec}>Decriment</button>
    </div>
  )
}


export default App