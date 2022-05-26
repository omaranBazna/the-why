import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from 'hamburger-react'
import {useState } from 'react'
import {useEffect} from 'react'
import ImpactCard from './Components/ImpactCard';
import Problem from './Components/Problem';
import client from "./graphics/clients.PNG";
import mel from './graphics/Mellisa.png'
import logo from './graphics/logo.png'
import value from './graphics/value.png'
import purpose from './graphics/purpose.png'
import research from './graphics/Research.png'
import about from './graphics/about.jpeg'
function App() {
  const [isOpen, setOpen] = useState('close')
  const [question, setQue] = useState(1)
  const questions=["Why?","Mission?","Purpose?"];
  /*
  useEffect(()=>{
   setInterval(()=>{
     setQue(old=> old+1)
    },1000)
  },[])
  */
  return (
    <div className="App">
      <div className="hum" onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}></div>
      <nav className={isOpen}>
         <img src={logo} />
         <a href="#why"  onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}>
         The Why
         </a>
         <a href="#help"  onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}>
         help
           </a>
           <a href="#impact"  onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}>
           impact
           </a>
           <a href="#clients"  onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}>
           collaborator
           </a>
           <a href="#founder"  onClick={()=>isOpen=="close"?setOpen("open"):setOpen("close")}>
           behind The Why
           </a>
          
      </nav>
      <div className="hero">
        <div className='colors'>
          <div className="green">

          </div>
          <div className="orange">
            
          </div>
          <div className="red">
            
          </div>
        </div>
        <div className='titleSection'>
         <h1>
           What is your 
         </h1>
         <h3><h1>W</h1>hy, <h1>M</h1>ission, <h1>P</h1>urpose</h3>
         <h3>
         Purpose Led Design, Strategy,Innovation and Facilitation 
         </h3>
         <button>Contact Us</button>
         </div>
      </div>
      <div className='About' id="About">

        <p>
        "The Why is a social and environmental impact consultancy focused on inspiring,defining, and bringing to life a more purposeful future"
        </p>
    
      </div>

      <div className="WhyWhy" id="why">
           <div className="left">
             <h1>
             Why was The Why founded?
             </h1>
             <h1>
             What the problems do we solve?
             </h1>

           </div>
           <div className="right">
               <div>
               <p>
        The Why is a private and public sector consultancy founded
        on the belief that we can leave the world a better place than
        the one we came into.
         <br></br>
         <br></br>
        This is business consulting <span className="colorFullFont"> with a difference</span>.
        <br></br>
        <br></br>
        We intend to bring your triple bottom line to life, maximizing
        profit, people, and planet. We believe in the power of purpose
        for achieving these outcomes.
        <br></br>
        <br></br>
        We meet you where you are, scale and pivot with you, all
        while being human and discovering the thrill of what it
        means to be us, the greatest wonder in the world.
        </p>
      
               </div>
               <div>
          
        <p>
        <p>
        A DECADE OF CONSULTING EXPERIENCE HAS LED TO THE
         FOLLOWING OBSERVATIONS:
        </p>
        <p>
        Key issues
        </p>
        <ul>
          <li>
          <Problem />
          </li>
    
        </ul>
        </p>
               </div>
           
           </div>
        
      </div>
     
      <div className="values" id="impact">
        <div>
          <h1>How does The Why deliver value?</h1>
          <h1>A holistic focus on outcomes </h1>
          <p>We take a robust effort to put purpose at the
heart of developing and implementing new
solutions by combining technology, products,
processes, and people to create change. This
is underpinned by collaboration, research,
experimentation, and implementation.
We are agile – we amend objectives and
capabilities as we learn, and we test and
experiment to get better outcomes. </p>
</div>
<img src={value} />
      </div>

      <div className="purpose">
        <h1>
        We deliver purpose driven…
        </h1>
        <img src={purpose} />
      </div>

    <div className="research">
    <div>
      <h1>
      Research and Discovery
      </h1>
      <img src={research} />
    </div>
       <div>
         <h2>
         Do you want to:
         </h2>
         <ul>
         <li>Consolidate a wide array of data to create actionable insights?</li>
         <li>Rally your team around the “aha” moments and a single version of the truth?</li>
          <li>Have the confidence to take your team from ideas to action?</li>
         </ul>

         <h2>
         How we can help:
         </h2>
         <ul>
         <li>Defining purpose-driven research plans that embed a wide range of methods
to uncover insights and develop meaningful findings</li>
         <li>Blending tactics like benchmarking, stakeholder interviews, customer focus
groups, and surveys</li>
          <li>Developing actionable insights</li>
         </ul>
       </div>



    </div>

      <div className="impact">
      <ImpactCard ></ImpactCard>
      <ImpactCard ></ImpactCard>
      <ImpactCard ></ImpactCard>
      <ImpactCard ></ImpactCard>
      <ImpactCard ></ImpactCard>
      </div>


      <div className='clients' id="clients">
        <img className="clients-img" src={client} />
      </div>


      <div className='founder' id="founder">
        <img src={mel} />
        <div>
        <h1>Melissa Saoudy </h1>
        <p>

        Our founder, Melissa, is an impact advisor, creator, and doer. Her
sweet spot is at the nexus of purpose, strategy, and innovation.
She has a strong passion for digitally-enabled social impact,
bringing this to life in the private and public sectors. She thrives
when working towards better outcomes in healthcare,
entrepreneurship, social services, and sustainability.
Lately, she has been working to develop meaningful Web 3
business models and managing teams to bring them to life.
A strong and empathetic project manager, she love coaching
and collaborating closely with clients and multi-disciplinary
teams. Her skills include human-centered design, value
proposition design, business model innovation, strategy
development and execution, stakeholder engagement,
innovation management, operational planning and execution.
As an experienced facilitator, she has delivered 100+ workshops in
the region and counting. She has a knack for getting people to
unlock their collective genius and turn their ideas into action.
          


        </p>
        </div>
      </div>
      <div className="contact">
        <h3>Reach out to me</h3>
        <a href="mailto:melissa@whyimpactconsulting.com">Gmail:melissa@whyimpactconsulting.com</a>
        <p>
            +971 56 212 7001
        </p>
      </div>
      
    </div>
  );
}

export default App;
