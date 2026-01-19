import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8 ">
        <h2  className='p-5 text-2xl font-extrabold bg-white w-10 h-10 flex justify-center items-center rounded-full'>{}{props.id+1}</h2>
        <div>
          <p className=' text-white font-bold mb-10 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime aut laudantium, hic velit iure?</p>
          <div className='flex justify-between'>
            <button className=' text-white bg-blue-500 px-8 py-3 rounded-full font-medium'>{props.tag}</button>
            <button className=' text-white bg-blue-500 px-3 py-2 rounded-full font-medium'><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent