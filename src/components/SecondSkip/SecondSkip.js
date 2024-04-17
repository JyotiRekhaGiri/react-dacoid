import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./SecondSkip.css";
import image2 from "../../images/Second.png";

const SecondSkip = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/register');
    }, 2000); 
  };

  const handleSkip = () => {
    navigate('/register');
  }

  return (
    <div className="container">
      <div className="box">
        <div className="skip">
          <span onClick={handleSkip}>Skip</span>
        </div>
        <div>
          <img src={image2} alt='first'/>
        </div>
        <div className='data'>
          <h3>Get Burn</h3>
          <p>Let’s keep burning to achieve your goals,<br></br> it hurts only temporarily, if you give up<br></br> now you will be in pain forever</p>
        </div>
        <div className="buttonpage">
          <button onClick={handlePage}>
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <FaChevronRight size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondSkip;
