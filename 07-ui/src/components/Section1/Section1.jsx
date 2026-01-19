
import Page1Content from "./Page1Content"
import Navbar  from "./Navbarjs"


const Section1 = (props) => {
  
  return (
    <div>
        <Navbar />
        <Page1Content users ={props.users}/>
    </div>
  )
}

export default Section1