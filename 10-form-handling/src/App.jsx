import React from 'react'

export const App = () => {

  const sub = (e)=>{
    e.preventDefault()
    console.log("Button clicked")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sub(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
