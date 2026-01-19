import { ArrowRight, FileVideo } from 'lucide-react';
import RightCardContent from './RightCardContent';

export const RightCard = (props) => {
  console.log(props);
  return (
    <div className="h-full w-1/3 rounded-4xl overflow-hidden relative shrink-0">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent tag = {props.tag} id = {props.id}/>
    </div>
  )
}

export default RightCard