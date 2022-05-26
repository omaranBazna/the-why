import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from 'hamburger-react'
import {useState } from 'react'
import {useEffect} from 'react'
import ImpactCard from './Components/ImpactCard';
import client from "./graphics/clients.PNG";
import mel from './graphics/Mellisa.png'
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

      <div className="WhyWhy">
        <p>
        The Why is a private and public sector consultancy founded
        on the belief that we can leave the world a better place than
        the one we came into.
        This is business consulting with a difference.
        We intend to bring your triple bottom line to life, maximizing
        profit, people, and planet. We believe in the power of purpose
        for achieving these outcomes.
        We meet you where you are, scale and pivot with you, all
        while being human and discovering the thrill of what it
        means to be us, the greatest wonder in the world.
        </p>
      </div>
      <div className="problems">
        <p>
        A DECADE OF CONSULTING EXPERIENCE HAS LED TO THE
         FOLLOWING OBSERVATIONS:
        </p>
        <h1>
        Key issues
        </h1>
        <ul>
          <li>
           <h1>
           Consulting worth its weight in paper
           </h1>
            <p>Over focus on developing lengthy documents and deliverables rather
than achieving outcomes  </p>
          </li>
          

          <li>
           <h1>
           Shallow and misdirected
           </h1>
            <p>A lack of focus on understanding the “why” creates a misaligned outcome </p>
          </li>
          
          <li>
           <h1>
           Copy paste consulting
           </h1>
            <p>A one size fits all approach does not work in most scenarios </p>
          </li>
          
           
          <li>
           <h1>
           Theoretical rather than practical
           </h1>
            <p>A beautiful plan that does not take your team’s and stakeholders’ needs
and capabilities into account. If it is not implementable, it is not valuable. </p>
          </li>
        </ul>
      </div>
      <div className="vlaues">
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
      <div className="impact">
      <ImpactCard ></ImpactCard>

      </div>


      <div className='clients'>
        <img src={client} />
      </div>


      <div className='founde'>
        <img src={mel} />
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
      <footer>
        <h1>Reach out to me</h1>
        <a href="mailto=melissa@whyimpactconsulting.com <melissa@whyimpactconsulting.com>">Gmail</a>
        <h1>
        +971 56 212 7001
        </h1>
      </footer>
      
    </div>
  );
}

export default App;
