import React from 'react';
import { useNavigate } from "react-router-dom";
import img1 from "../../images/flat-color-icons_google.png";
import img2 from "../../images/Vector.png";
import './Login.css';

const Login = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/home');
    }

  return (
    <div className='container'>
      <div className='box'>
        <div className='register'>
        <h3>Welcome Back</h3>
        </div>
        <div className='formbox'>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="checkbox-group">
            <label htmlFor="agree" style={{textDecoration: 'underline', color: '#7d7b7b'}}>Forgot your password?</label>
          </div>
          <div className='butt'>
          <button onClick={handleSignIn}>Sign In</button>
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
          <p><span style={{textDecoration: "underline"}}>Don’t have an account yet?</span> <span onClick={() => window.location.href='/register'}>Create an account</span></p>
        </div>
        </div>
    </div>
  );
}

export default Login;
