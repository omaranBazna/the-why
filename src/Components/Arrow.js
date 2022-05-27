import "../Arrow.css"
import react from "react"
import  {useState} from 'react'
function Arrow(props){

    const [x_pos,setPos]=useState(0);
   function handleClick(){
       if(props.name=="left2"){
        setPos(x_pos-50);
  
       }else{
        setPos(x_pos+50);
       }
       console.log(x_pos)
   }
    return (
     
        <div className={["Arrow",props.name].join(' ')}  onClick={handleClick}> 
           
        </div>
    )
}
export default Arrow;