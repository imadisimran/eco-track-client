import React, { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.png'
import GoogleLogin from '../components/GoogleLogin';

export default function Register() {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // --- Validation Logic ---
    const requirements = [
        { id: 1, label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
        { id: 2, label: "At least 1 number", test: (pwd) => /\d/.test(pwd) },
        { id: 3, label: "At least 1 special char", test: (pwd) => /[@$!%*?&]/.test(pwd) },
        { id: 4, label: "Uppercase & Lowercase", test: (pwd) => /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) },
    ];

    // Check if password meets all requirements
    const isPasswordValid = requirements.every((req) => req.test(password));

    // Calculate Strength Progress
    const passedCount = requirements.filter((req) => req.test(password)).length;
    const progress = (passedCount / requirements.length) * 100;

    const getProgressColor = () => {
        if (progress <= 25) return '#ff4d4d'; // Red
        if (progress <= 50) return '#ffc107'; // Yellow
        if (progress <= 75) return '#2196f3'; // Blue
        return '#00C853'; // Green
    };

    return (
        <div className="main-container">
            <style>{`
        .main-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f3f4f6;
            font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
        .styled-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .form-container {
            width: 350px;
            /* min-height removed to allow content to grow */
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 10px;
            box-sizing: border-box;
            padding: 20px 30px;
        }
        .logo-placeholder {
            width: 50px;
            height: 50px;
            background-color: #00C853;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            font-weight: bold;
            font-size: 20px;
        }
        .title {
            text-align: center;
            margin: 15px 0 20px 0;
            font-size: 24px;
            font-weight: 800;
        }
        .form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 15px;
        }
        .input {
            width: 100%;
            border-radius: 20px;
            border: 1px solid #c0c0c0;
            outline: 0 !important;
            box-sizing: border-box;
            padding: 12px 15px;
            font-family: inherit;
        }
        /* Password specific styles */
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
        
        /* Validator Styles */
        .validator-box {
            margin-top: -5px;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 10px;
            border: 1px solid #eee;
            animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .strength-meter {
            height: 4px;
            width: 100%;
            background-color: #e0e0e0;
            border-radius: 2px;
            margin-bottom: 8px;
            overflow: hidden;
        }
        .strength-bar {
            height: 100%;
            transition: width 0.3s ease, background-color 0.3s ease;
        }
        .req-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .req-item {
            display: flex;
            align-items: center;
            font-size: 10px;
            color: #747474;
            margin-bottom: 4px;
            transition: color 0.2s;
        }
        .req-item.valid {
            color: #00C853;
            font-weight: 600;
        }

        .form-btn {
            padding: 12px 15px;
            font-family: inherit;
            border-radius: 20px;
            border: 0 !important;
            outline: 0 !important;
            background: #00C853;
            color: white;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            font-weight: 600;
            transition: all 0.2s;
        }
        .form-btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            box-shadow: none;
        }
        .form-btn:active {
            box-shadow: none;
        }

        .sign-up-label {
            margin: 0;
            font-size: 10px;
            color: #747474;
            text-align: center;
        }
        .sign-up-link {
            margin-left: 4px;
            font-size: 11px;
            text-decoration: underline;
            text-decoration-color: teal;
            color: teal;
            cursor: pointer;
            font-weight: 800;
        }
        .divider {
            text-align: center;
            font-size: 10px;
            color: #747474;
            margin: 10px 0;
        }
        .buttons-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .google-login-button {
            border-radius: 20px;
            box-sizing: border-box;
            padding: 10px 15px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            gap: 5px;
            border: 2px solid #747474;
            background: white;
        }
      `}</style>

            <div className="styled-wrapper">
                <div className="form-container">
                    {/* Logo Fallback */}
                    <img className='w-40 mx-auto' src={logo} alt="logo" />

                    <p className="title">Register To Eco Track</p>

                    <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className="input"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="url"
                            className="input"
                            placeholder="Photo URL"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password Field with Validation */}
                        <div className="password-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="toggle-pass-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>

                        {/* Live Validation UI - Only shows when typing */}
                        {password.length > 0 && (
                            <div className="validator-box">
                                <div className="strength-meter">
                                    <div
                                        className="strength-bar"
                                        style={{
                                            width: `${progress}%`,
                                            backgroundColor: getProgressColor()
                                        }}
                                    />
                                </div>
                                <ul className="req-list">
                                    {requirements.map((req) => (
                                        <li key={req.id} className={`req-item ${req.test(password) ? 'valid' : ''}`}>
                                            {req.test(password) ? <Check size={10} className="mr-1" /> : <div className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-1"></div>}
                                            {req.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Submit Button - Disabled until valid */}
                        <button className="form-btn btn-primary" disabled={!isPasswordValid}>
                            Sign Up
                        </button>
                    </form>

                    <p className="sign-up-label">
                        Already have an account?<span className="sign-up-link">Sign In</span>
                    </p>

                    <div className="divider">Or</div>

                    <div className="buttons-container">
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
}