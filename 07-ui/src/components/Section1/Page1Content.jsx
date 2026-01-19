
import { LeftSection } from './LeftSection'
import { RightSection } from './RightSection'

const Page1Content = (props) => {
  
  return (
    <div className='py-10 flex h-[90vh] px-16 gap-10'>
        <LeftSection />
        <RightSection  users ={props.users}/>
    </div>
  )
}

export default Page1Content