import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from 'hamburger-react'
import {useState } from 'react'
function App() {
  const [isOpen, setOpen] = useState('close')
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
      
      </div>
   
    </div>
  );
}

export default App;
