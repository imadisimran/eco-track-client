import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { Check, Eye, EyeOff } from 'lucide-react';
import GoogleLogin from '../components/GoogleLogin';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='flex justify-center items-center h-screen'>
      <StyledWrapper>
        <div className="form-container">
          <img className='w-40 mx-auto' src={logo} alt="logo" />
          <p className="title">Login To Eco Track</p>
          <form className="form">
            <input type="email" className="input" placeholder="Email" />
            {/* <input type="password" className="input" placeholder="Password" /> */}
            <div className="password-group">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
              <button
                type="button"
                className="toggle-pass-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn btn-primary">Log in</button>
          </form>
          <p className="sign-up-label text-center">
            Don't have an account?<span className="sign-up-link">Sign up</span>
          </p>
          <div className='divider'>Or</div>
          <div className="buttons-container">
            <GoogleLogin></GoogleLogin>
          </div>
          
        </div>
      </StyledWrapper>
    </div>
  );
};


const StyledWrapper = styled.div`
  .form-container {
    width: 350px;
    min-height: 500px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .title {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0 30px 0;
    font-size: 28px;
    font-weight: 800;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 15px;
  }

  .input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
  }

  .page-link {
    text-decoration: underline;
    margin: 0;
    text-align: end;
    color: #747474;
    text-decoration-color: #747474;
  }

  .page-link-label {
    cursor: pointer;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 9px;
    font-weight: 700;
  }

  .page-link-label:hover {
    color: #000;
  }

  .form-btn {
    padding: 10px 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: #00C853;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .form-btn:active {
    box-shadow: none;
  }

  .sign-up-label {
    margin: 0;
    font-size: 10px;
    color: #747474;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .sign-up-link {
    margin-left: 1px;
    font-size: 11px;
    text-decoration: underline;
    text-decoration-color: teal;
    color: teal;
    cursor: pointer;
    font-weight: 800;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 15px;
  }

  .apple-login-button,
      .google-login-button {
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 11px;
    gap: 5px;
  }

  .apple-login-button {
    background-color: #000;
    color: #fff;
    border: 2px solid #000;
  }

  .google-login-button {
    border: 2px solid #747474;
  }

  .apple-icon,
      .google-icon {
    font-size: 18px;
    margin-bottom: 1px;
  }
  
  .password-group {
            position: relative;
            width: 100%;
        }
        .toggle-pass-btn {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #747474;
            display: flex;
            align-items: center;
        }
  
  `;

export default Login;