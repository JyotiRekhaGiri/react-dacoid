import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  // Function to handle checkbox change
  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index]
    });
  };

  // Function to handle button click
  const handleConfirmButtonClick = () => {
    console.log('Button clicked!');
    navigate('/workout');
  };

  // Array of different names for each box
  const boxNames = ['Weight Loss', 'Muscle Gain', 'Muscle Gain', 'General Fitness', 'Event - specific training', 'Mindfulness and Mental Health'];

  return (
    <div className='container'>
      <div className='box'>
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <h3>What are your goals?</h3>
        </div>
        <div className='boxes'>
          {boxNames.map((name, index) => (
            <div key={index} className='goal-box'>
              <p>{name}</p>
              <input
                type='checkbox'
                onChange={() => handleCheckboxChange(index)}
                checked={checkedItems[index] || false}
                style={{ width: '20px', height: '22px' }} // Adjust checkbox size here
              />
            </div>
          ))}
        </div>
        <div className='button-container'>
          <button
            onClick={handleConfirmButtonClick}
            disabled={Object.values(checkedItems).every(value => !value)} // Disable button if no checkbox is checked
            style={{ width: '100%' }} // Make the button occupy the whole width
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
