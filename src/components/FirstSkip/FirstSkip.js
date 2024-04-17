import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./FirstSkip.css";
import image1 from "../../images/First.png";

const FirstSkip = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/secondskip');
    }, 2000); // Adjust the delay as needed (in milliseconds)
  };

  const handleSkip = () => {
    navigate('/secondskip');
  }

  return (
    <div className="container">
      <div className="box">
        <div className="skip">
          <span onClick={handleSkip}>Skip</span>
        </div>
        <div>
          <img src={image1} alt='first'/>
        </div>
        <div className='data'>
          <h3>Track Your Goal</h3>
          <p>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
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

export default FirstSkip;
