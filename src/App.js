import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from 'hamburger-react'
import {useState } from 'react'
import {useEffect} from 'react'
function App() {
  const [isOpen, setOpen] = useState('close')
  const [question, setQue] = useState(1)
  const questions=["Why?","Mission","Purpose"];
  useEffect(()=>{
   setInterval(()=>{
     setQue(old=> old+1)
    },1000)
  },[])
  return (
    <div className="App">
      <div className="hum" onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}></div>
      <nav className={isOpen}>
      
         <a href="">
         The Why?
         </a>
         <a href="">
         help?
           </a>
           <a href="">
           impact?
           </a>
           <a href="">
           collaborator?
           </a>
           <a href="">
           behind The Why?
           </a>
          
      </nav>
      <div className="hero">
         <h2>
           What is your 
         </h2>
         <h1>{questions[question%3]}</h1>
      </div>
   
    </div>
  );
}

export default App;
