import React, { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';

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
                    <div className="logo-placeholder">ET</div>

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
                        <div className="google-login-button">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg>
                            <span>Log in with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}