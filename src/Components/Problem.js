import react from 'react'
import {useState} from 'react'
import "../problem.css"
function Problem(){
  const [open2,setOpen2]=useState("close2");
    return (
        <div className="problem"> 
          
            <h3 onClick={()=>{setOpen2(old=>old=="close2"?"open2":"close2")}}>
             "title of the problem"
            </h3>
            <p className={open2} >
              "description of the problem"

            </p>
        </div>
    )
}
export default Problem;