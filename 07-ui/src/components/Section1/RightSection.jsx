
import  RightCard  from './RightCard'

export const RightSection = (props) => {

  return (
    <div id = 'right' className='h-full rounded -3xl w-3/4 p-10 flex gap-10 overflow-hidden flex-nowrap overflow-x-auto'>
     
      {props.users.map((elem, idx)=>{
        return <RightCard key = {idx} id = {idx} img = {elem.img} tag = {elem.tag} />
      })}
    </div>
  )
}

export default RightSection
