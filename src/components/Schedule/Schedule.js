import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Schedule.css';
import { useNavigate } from "react-router-dom";
import group from "../../images/Group.png";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineCamera } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { LuUser } from 'react-icons/lu';
import { AiOutlinePlus } from 'react-icons/ai';

const Schedule = () => {

  const [clickedIcon, setClickedIcon] = useState(null);
  const [monthYear, setMonthYear] = useState('Feb 2024');

  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate('/workout')
  };

  const handleLeftSecClick = () => {
    setMonthYear('Feb 2023');
  }

  const handleRightClick = () => {
    setMonthYear('Feb 2025');
  };

  const handleClick = (iconName) => {
    setClickedIcon(iconName);
    if (iconName === 'home') {
      navigate('/home');
    }
  };

  const currentDate = new Date(); // Get the current date
  const startingDayIndex = currentDate.getDay(); // Get the index of the starting day of the week (0 for Sunday, 1 for Monday, etc.)

 // Generate an array of dates from 1 to 29
 const dates = Array.from({ length: 29 }, (_, i) => i + 1);
  
 // Generate an array of days corresponding to the dates
 const days = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className='container'>
      <div className='box' >
        <div className='heading'>
          <button onClick={handleLeftClick}><FaChevronLeft /></button>
          <h3>Workout Schedule</h3>
        </div>

        {/* Date navigation with left and right chevrons */}
        <div className='date-navigation'>
          <button onClick={handleLeftSecClick}><FaChevronLeft /></button>
          <p>{monthYear}</p>
          <button onClick={handleRightClick}><FaChevronRight /></button>
        </div>

        <div className='date-navigation'>
          <div className='dates'>
            {dates.map((date, index) => (
              <div className='date-box' key={index} style={{ background: (index === 5) ? 'linear-gradient(to right,  #cde1ee, #b6d4e8,#8bb8d6)': '',color: (index === 5) ? '#fff' : '' }}>
                <p>{days[index]}</p>
                <h4 style={{ color: (index === 5 || days[index] === 'Mon') ? '#fff' : '' }}>{date}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className='timings'>
          {/* Left side containing timings */}
          <div className='timing'>
            <div className='time'>
              <div><p>06:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='tex' >
                <p className='pink' style={{position: 'fixed', marginLeft: '110px', transform: "transition(-70%, 50%)",top: '36%'}}>Ab Workout, 7:30am</p>
              </div>
            <div className='time'>
              <div><p>07:00 AM</p></div>
              
            </div>
            <hr />
            <div className='time'>
              <div><p>08:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>09:00 AM</p></div>
              <div className='textbox'>
                <p className='pink'>Upperbody Workout, 9am</p>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>10:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>11:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>12:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>01:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>02:00 AM</p></div>
              <div className='textbox'>
                <p style={{background: '#ccc', padding: '5px', borderRadius: '1rem',margin:'0 7px 0 7px'}}>Lowerbody Workout, 3pm</p>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>03:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>04:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            <div className='time'>
              <div><p>05:00 AM</p></div>
              <div className='textbox'>
                <input type='text'/>
              </div>
            </div>
            <hr />
            
          </div>
        </div>

        <div style={{position: 'absolute',bottom: '27%',right: '30%'}}>
          <p className='butt'><AiOutlinePlus /></p>
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
  );
};

export default Schedule;
