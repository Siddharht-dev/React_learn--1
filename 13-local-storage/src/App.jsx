import React from 'react'

export const App = () => {

  const user = {
    userName: 'Siddharth',
    age: 69,
    city: 'Haldwani'
  }

  const userString = JSON.stringify(user)

  localStorage.setItem("user", userString)

  return (
    <div>App</div>
  )
}

export default App