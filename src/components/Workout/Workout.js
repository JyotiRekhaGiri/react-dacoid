import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineCamera } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import "./Workout.css";
import { useNavigate } from "react-router-dom";
import tracker from "../../images/Chart Full.png";
import image53 from "../../images/Ellipse 53.png";
import image54 from "../../images/Ellipse 54.png";
import image55 from "../../images/Ellipse 55.png";
import group from "../../images/Group.png";
import ai from "../../images/Union.png";
import { LuUser } from 'react-icons/lu';

const Workout = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    console.log('Button clicked!');
    navigate('/home');
  };

  const [clickedIcon, setClickedIcon] = useState(null);

  const handleClick = (iconName) => {
    setClickedIcon(iconName);
    if (iconName === 'group') {
      navigate('/schedule');
    }
  };

  return (
    <div className='container'>
      <div className='box'>
        <div className='topbox' >
          <div className='header'>
            <button onClick={handleBack}>
              <FaChevronLeft />
            </button>
            <h3>Workout Tracker</h3>
          </div>
          <div className='tracker-section'>
            <div className='tracker-info'>
              <div className='tracker-text'>
                <div style={{ fontSize: "12px" }}>
                  <span style={{ marginLeft: "7rem" }}>Good job</span>
                  <span style={{ marginLeft: "2rem" }}>less than 320cal</span>
                </div>
                <div>
                  <img src={ai} alt='' style={{ width: '3px', height: '13px', marginLeft: "8.4rem" }} />
                  <img src={ai} alt='' style={{ width: '3px', height: '13px', marginLeft: "6rem" }} />
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <img src={tracker} alt='chart' style={{ height: "100px", width: "100%" }} />
              </div>
              <div className='alert'>
                <FiAlertTriangle />
                <p>You've burned fewer calories than yesterday. Time to get moving!</p>
              </div>
            </div>
          </div>

          <div className='upcoming-workout'>
            <div className='upcoming-header'>
              <h3>Upcoming Workout</h3>
              <p style={{ color: '#99999b', fontSize: '14px' }}>See more</p>
            </div>
            <div className='workout-boxes'>
              <div className='box1'>
                <div className='workout-details'>
                  <div>
                    <img src={image53} alt='53' />
                  </div>
                  <div style={{ margin: "0", padding: "0", marginLeft: '7px' }}>
                    <p style={{ fontSize: "14px", margin: '0', padding: '0' }}>Full Body Workout</p>
                    <p style={{ color: "#99999b", fontSize: '12px', margin: "0", marginTop: '0.4rem' }}>Today 3pm</p>
                  </div>
                </div>
                <div className='switch'>
                  <label className='toggle'>
                    <input type='checkbox' /> {/*checked={isToggled} onChange={onToggle}*/}
                    <span className='slider rounded' />
                  </label>
                </div>
              </div>
              <div className='box2'>
                <div className='workout-details'>
                  <img src={image54} alt='54' />
                  <div style={{ margin: "0", padding: "0", marginLeft: '7px' }}>
                    <p style={{ margin: "0", padding: "0", fontSize: '14px' }}>Upper Body Workout</p>
                    <p style={{ color: "#99999b", fontSize: '12px', margin: "0", marginTop: '0.4rem' }}>4 Feb, 3:30 pm</p>
                  </div>
                </div>
                <div>
                  <div className='switch'>
                    <label className='toggle'>
                      <input type='checkbox' /> {/*checked={isToggled} onChange={onToggle}*/}
                      <span className='slider rounded' />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='train-section'>
            <div className='train-header'>
              <h3>What Do You Want to Train</h3>
            </div>
            <div className='train-details'>
              <div className='train-text'>
                <p style={{ fontSize: '13.5px', margin: '0', marginTop: '0.7rem' }}>Full Body Workout</p>
                <p style={{ fontSize: '11px', margin: '0', marginTop: "0.3rem" }}>Arms</p>
                <p style={{ fontSize: '11px', margin: '0', marginTop: "0.3rem" }}>Chest</p>
              </div>
              <div className='train-image'>
                <img src={image55} alt='55' style={{ margin: "5px 0px 0 0" }} />
              </div>
            </div>
          </div>
        </div>

        <div className='nav'>
          <RiHome2Line onClick={() => handleClick('home')} className={clickedIcon === 'home' ? 'clicked' : ''} />
          <img src={group} alt='thunder' onClick={() => handleClick('group')} className={clickedIcon === 'group' ? 'clicked' : ''} />
          <CiSearch onClick={() => handleClick('search')} className={clickedIcon === 'search' ? 'clicked' : ''} />
          <HiOutlineCamera onClick={() => handleClick('camera')} className={clickedIcon === 'camera' ? 'clicked' : ''} />
          <LuUser onClick={() => handleClick('user')} className={clickedIcon === 'user' ? 'clicked' : ''} />
        </div>
      </div>
    </div>
  )
}

export default Workout;
