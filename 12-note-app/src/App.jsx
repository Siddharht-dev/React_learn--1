import React, { useState } from 'react'

export const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    let copyTask = [...task];

    copyTask.push({title, details})
    setTask(copyTask)

    console.log(task);

    setTitle('')
    setDetails('')
  }


  return (


    <div className=" h-screen bg-black text-white lg:flex">
      <form onSubmit={(e)=>{
          submitHandler(e)
      }} className='flex p-10 lg:w-1/2 items-start flex-col w-full'>
        <h1 className='text-4xl font-bold mb-5'>Add notes</h1>


        {/* /Title */}
          <input
          className=' p-5 w-full  border-2 rounded font-bold text-3xl mb-5 outline-none'
          type="text"
          placeholder='Enter Notes Heading'
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          value={title}
        />

        {/* Details */}
        <textarea
          className=' p-5 w-full h-40 border-2 rounded font-bold text-xl mb-5 outline-none'
          type="text"
          placeholder='Enter details'
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          value={details}
        />

        <button className='bg-white active:bg-gray-400   w-full text-black p-5 rounded'>Add Notes</button>
      </form>

      <div className=' lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {task.map(function(elem ,ind){

            return <div key = {ind} className='h-52 w-50 rounded-2xl bg-cover bg-[url("https://imgs.search.brave.com/eliG2SzIwcJ_wvslqCuiaoVelA2P6pF-R6DnKTpyPGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9TdGlj/a3ktTm90ZXMtUE5H/LUZpbGUtRG93bmxv/YWQtRnJlZS5wbmc")] text-black p-3'>
              <h3 className='text-xl font-extrabold leading-tight mb-3 mt-4'>{elem.title}</h3>
              <p className='font-extralight leading-tight text-gray-700'>{elem.details}</p>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App