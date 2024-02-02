import React from 'react';
import './no.css';
import video from '../../Assets/red.mp4';
import image from '../../Assets/sayWhat.jpg';
import { Link } from 'react-scroll';
import { Navigate, useNavigate } from 'react-router-dom';

const No = () => {
    const navigate = useNavigate();
  return (
       <div>
      <section id="intro">
        <div className="overlay">
        <video src={video} autoPlay loop muted type="video/mp4"/>
        </div>
            
        <div className="introContent">
        <img src={image} alt="stitch" className="bg"/>
            <h1 className="greeting">What you say Sani???</h1>
           <h3 className='question'> That shit dont work here, <span className='Valentine'>Please click the correct button down below😘</span></h3>
           <span><Link><button className="btn" onClick={() => navigate("/agree")}>Yes</button> </Link></span>

        </div>
        
       </section>
    </div>
  )
}

export default No
