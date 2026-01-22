import React, { useState } from 'react'

export const App = () => {


  const [num, setnum] = useState({user: 'Siddharth', age: 21});

  const fun = ()=>{
    const newNum = {...num}
    newNum.user = "Mahi"
    setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user}, {num.age} </h1>
      <button onClick={fun}>Click me</button>
    </div>
  )
}

export default App
