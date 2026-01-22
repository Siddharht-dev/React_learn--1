import React, { useState } from 'react'

export const App = () => {

  const [title, setTitle] = useState("")

  const sub = (e)=>{
    e.preventDefault()
    console.log("Form submitted by", title)
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sub(e)
      }}>
        <input
          type="text"
          placeholder='Enter your name'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
