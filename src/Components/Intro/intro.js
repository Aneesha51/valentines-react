import React from 'react';
import './intro.css';
import video from '../../Assets/red.mp4';
import stitch from '../../Assets/stitch.png';
import { Link } from 'react-scroll';
import { Navigate, useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section id="intro">
        <div className="overlay">
        <video src={video} autoPlay loop muted type="video/mp4"/>
        </div>
            
        <div className="introContent">
        <img src={stitch} alt="stitch" className="bg"/>
            <h1 className="greeting">Hey my beautiful! </h1>
            <h2><span className="introText"><span className="introName">Kaylush Subaya Rangan</span> </span></h2>
           <h3 className='question'> Will you be my <span className='Valentine'>Valentine?</span></h3>
           <span><Link><button className="btn" onClick={() => navigate("/agree")}>Yes</button> </Link><Link><button className="btn" onClick={() => navigate("/no")}>No</button></Link></span>

        </div>
        
       </section>
    </div>
  )
}

export default Intro
