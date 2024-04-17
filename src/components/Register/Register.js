import React from 'react';
import { useNavigate } from "react-router-dom";
import img1 from "../../images/flat-color-icons_google.png";
import img2 from "../../images/Vector.png";
import './Register.css';

const Register = () => {
  
  const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/home');
    }
  return (
    <div className='container'>
      <div className='box'>
        <div className='register'>
        <h3>Create an account</h3>
        </div>
        <div className='formbox'>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">By proceeding, I agree to all <span>T&C</span> and <span>Privacy Policy</span></label>
          </div>
          <div className='but'>
          <button onClick={handleSignUp}>Create an Account</button>
          </div>
          </form>
          </div>
        {/* Horizontal line */}
        <div className='hori'> <hr style={{marginRight: "5px"}} /><span style={{fontSize: '12px'}}>Or</span><hr style={{marginLeft: "5px"}}/></div>
        <div className="social-media">
          <div className='img1'>
            <img src={img1} alt='google' />
          </div>
          <div className='img2'>
            <img src={img2} alt='facebook' />
          </div>
        </div>
        <div className='para'>
          <p>Already have an account? <span onClick={() => window.location.href='/login'}>Login</span></p>
        </div>
        </div>
    </div>
  );
}

export default Register;
