import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from 'hamburger-react'
import {useState } from 'react'
import {useEffect} from 'react'
function App() {
  const [isOpen, setOpen] = useState('close')
  const [question, setQue] = useState(1)
  const questions=["Why?","Mission?","Purpose?"];
  useEffect(()=>{
   setInterval(()=>{
     setQue(old=> old+1)
    },1000)
  },[])
  return (
    <div className="App">
      <div className="hum" onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}></div>
      <nav className={isOpen}>
      
         <a href="#About">
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
        <div className='titleSection'>
         <h2>
           What is your 
         </h2>
         <h1>{questions[question%3]}</h1>
         <h3>
         Purpose Led Design, Strategy,Innovation and Facilitation 
         </h3>
         <button>Contact Us</button>
         </div>
      </div>
      <div className='About' id="About">
        <p>
        The Why is a social
        and environmental
        impact consultancy
        focused on inspiring,
        defining, and bringing
        to life a more
        purposeful future
        </p>
      </div>
   
    </div>
  );
}

export default App;
