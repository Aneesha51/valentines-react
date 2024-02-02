import React from 'react';
import './agree.css';
import stitch from '../../Assets/stitch.png';
import video from '../../Assets/red.mp4';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Agree = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="overlay">
        <video src={video} autoPlay loop muted type="video/mp4"/>
        </div>
        <div className='agreeContent'>
          <img src={stitch} alt="stitch" className="bg"/>
          <h2>Will see you on the 14th my darling💓!</h2>
          <span><Link><button className="btn" onClick={() => navigate("/intro")}>Home</button> </Link></span>
      </div>
      
    </div>
  )
}

export default Agree
