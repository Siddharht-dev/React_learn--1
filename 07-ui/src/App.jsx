import React from 'react'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

export const App = () => {

  const users = [
      {
        img : 'https://plus.unsplash.com/premium_photo-1661576445274-3fd93c31512d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro : '',
        tag : 'Satisfied'
      },
      {
        img : 'https://plus.unsplash.com/premium_photo-1669686966146-da8d2400de46?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro : '',
        tag : 'Underserved'
      },
      {
        img : 'https://plus.unsplash.com/premium_photo-1726873245988-71005d5b1244?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        intro : '',
        tag : 'Underbanked'
      }
    ]



  return (

<div>
  <Section1 users = {users}/>
  <Section2 />
</div>
  )
}

export default App;
