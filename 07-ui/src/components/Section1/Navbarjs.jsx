import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-16">
        <h4 class = 'text-white bg-black px-6 py-2 rounded-full'>Target Audience</h4>
        <div className="flex gap-5">
            <button className="px-4 py-2  rounded-full hover:bg-gray-500 hover:text-white transition">Digital</button>
            <button className="px-4 py-2  rounded-full hover:bg-gray-500 hover:text-white transition">Banking</button>
            <button className="px-4 py-2  rounded-full hover:bg-gray-500 hover:text-white transition">Platform</button>
        </div>
    </div>
  )
}

export default Navbar