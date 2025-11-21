import React, { useState } from 'react';
import { Check, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.png'
import GoogleLogin from '../components/GoogleLogin';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router';
import Loader from './Loader';

// --- Validation Logic ---
const requirements = [
    { id: 1, label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
    { id: 2, label: "At least 1 number", test: (pwd) => /\d/.test(pwd) },
    { id: 3, label: "At least 1 special char", test: (pwd) => /[@$!%*?&]/.test(pwd) },
    { id: 4, label: "Uppercase & Lowercase", test: (pwd) => /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) },
];

export default function Register() {
    // const [name, setName] = useState('');
    // const [photo, setPhoto] = useState('');
    // const [email, setEmail] = useState('');
    const location=useLocation()
    const navigate=useNavigate()
    const { signUp, update,loading,setLoading } = useAuth()
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // console.log(location.state)

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        console.log(name,photo,email)
        signUp(email, password)
            .then(result => {

                update(name, photo)
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: `Welcome ${result.user.displayName}`,
                            text: "Sign Up Successfully",
                            timer: 2000,
                        });
                        navigate(location.state || '/')
                    })
                    .catch((err) => {
                        console.log(err)
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                        setLoading(false)
                    })
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                setLoading(false)
            })
    }

    

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

    if(loading){
        return <Loader></Loader>
    }

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

                    <form className="form" onSubmit={handleSignUp}>
                        <input
                            type="text"
                            className="input"
                            placeholder="Name"
                            name='name'
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="url"
                            className="input"
                            placeholder="Photo URL"
                            name='photo'
                        // value={photo}
                        // onChange={(e) => setPhoto(e.target.value)}
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
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
                        Already have an account?<Link state={location.state} to='/login' className="sign-up-link">Sign In</Link>
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


//Everything on tailwind



// import React, { useState } from 'react';
// import { Check, Eye, EyeOff } from 'lucide-react';
// import logo from '../assets/logo.png';
// import GoogleLogin from '../components/GoogleLogin';
// import useAuth from '../hooks/useAuth';
// import Swal from 'sweetalert2';
// import { Link, useLocation, useNavigate } from 'react-router';
// import Loader from './Loader';

// export default function Register() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { signUp, update, loading, setLoading } = useAuth();
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handleSignUp = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const name = form.name.value;
//         const photo = form.photo.value;
//         const email = form.email.value;
//         console.log(name, photo, email);
//         signUp(email, password)
//             .then(result => {
//                 update(name, photo)
//                     .then(() => {
//                         Swal.fire({
//                             icon: "success",
//                             title: `Welcome ${result.user.displayName}`,
//                             text: "Sign Up Successfully",
//                             timer: 2000,
//                         });
//                         navigate(location.state || '/');
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                         Swal.fire({
//                             icon: "error",
//                             title: "Oops...",
//                             text: "Something went wrong!",
//                         });
//                         setLoading(false);
//                     });
//             })
//             .catch(err => {
//                 console.log(err);
//                 Swal.fire({
//                     icon: "error",
//                     title: "Oops...",
//                     text: "Something went wrong!",
//                 });
//                 setLoading(false);
//             });
//     };

//     // --- Validation Logic ---
//     const requirements = [
//         { id: 1, label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
//         { id: 2, label: "At least 1 number", test: (pwd) => /\d/.test(pwd) },
//         { id: 3, label: "At least 1 special char", test: (pwd) => /[@$!%*?&]/.test(pwd) },
//         { id: 4, label: "Uppercase & Lowercase", test: (pwd) => /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) },
//     ];

//     // Check if password meets all requirements
//     const isPasswordValid = requirements.every((req) => req.test(password));

//     // Calculate Strength Progress
//     const passedCount = requirements.filter((req) => req.test(password)).length;
//     const progress = (passedCount / requirements.length) * 100;

//     const getProgressColor = () => {
//         if (progress <= 25) return '#ff4d4d'; // Red
//         if (progress <= 50) return '#ffc107'; // Yellow
//         if (progress <= 75) return '#2196f3'; // Blue
//         return '#00C853'; // Green
//     };

//     if (loading) {
//         return <Loader />;
//     }

//     const fontStack = "font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif]";

//     return (
//         <div className={`flex justify-center items-center min-h-screen bg-[#f3f4f6] ${fontStack}`}>
//             {/* Minimal CSS for Animation Only */}
//             <style>{`
//                 @keyframes customFadeIn {
//                     from { opacity: 0; transform: translateY(-5px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
//                 .animate-custom-fade {
//                     animation: customFadeIn 0.3s ease-in-out;
//                 }
//             `}</style>

//             <div className="w-full flex justify-center">
//                 {/* Form Container */}
//                 <div className="w-[350px] bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-[20px_30px] box-border">
                    
//                     <img className='w-40 mx-auto' src={logo} alt="logo" />

//                     <p className="text-center m-[15px_0_20px_0] text-[24px] font-extrabold">
//                         Register To Eco Track
//                     </p>

//                     <form className="w-full flex flex-col gap-[15px] mb-[15px]" onSubmit={handleSignUp}>
//                         <input
//                             type="text"
//                             className="w-full rounded-[20px] border border-[#c0c0c0] outline-none p-[12px_15px] font-inherit text-sm"
//                             placeholder="Name"
//                             name='name'
//                         />
//                         <input
//                             type="url"
//                             className="w-full rounded-[20px] border border-[#c0c0c0] outline-none p-[12px_15px] font-inherit text-sm"
//                             placeholder="Photo URL"
//                             name='photo'
//                         />
//                         <input
//                             type="email"
//                             className="w-full rounded-[20px] border border-[#c0c0c0] outline-none p-[12px_15px] font-inherit text-sm"
//                             placeholder="Email"
//                             name='email'
//                         />

//                         {/* Password Field with Validation */}
//                         <div className="relative w-full">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 className="w-full rounded-[20px] border border-[#c0c0c0] outline-none p-[12px_15px] font-inherit text-sm"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                             <button
//                                 type="button"
//                                 className="absolute right-[15px] top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[#747474] flex items-center hover:text-black"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                             </button>
//                         </div>

//                         {/* Live Validation UI - Only shows when typing */}
//                         {/* Uses Tailwind for styling, but the custom class 'animate-custom-fade' for the keyframes */}
//                         {password.length > 0 && (
//                             <div className="mt-[-5px] bg-[#f8f9fa] rounded-[8px] p-[10px] border border-[#eee] animate-custom-fade">
//                                 <div className="h-[4px] w-full bg-[#e0e0e0] rounded-[2px] mb-[8px] overflow-hidden">
//                                     <div
//                                         className="h-full transition-[width_0.3s_ease,background-color_0.3s_ease]"
//                                         style={{
//                                             width: `${progress}%`,
//                                             backgroundColor: getProgressColor()
//                                         }}
//                                     />
//                                 </div>
//                                 <ul className="list-none p-0 m-0">
//                                     {requirements.map((req) => (
//                                         <li 
//                                             key={req.id} 
//                                             className={`flex items-center text-[10px] mb-[4px] transition-colors duration-200 ${
//                                                 req.test(password) ? 'text-[#00C853] font-semibold' : 'text-[#747474]'
//                                             }`}
//                                         >
//                                             {req.test(password) ? (
//                                                 <Check size={10} className="mr-1" />
//                                             ) : (
//                                                 <div className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-1"></div>
//                                             )}
//                                             {req.label}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <button 
//                             className="p-[12px_15px] font-inherit rounded-[20px] border-none outline-none bg-[#00C853] text-white cursor-pointer shadow-[0px_3px_8px_rgba(0,0,0,0.24)] font-semibold transition-all duration-200 disabled:bg-[#ccc] disabled:cursor-not-allowed disabled:shadow-none active:shadow-none hover:bg-[#00b34a]"
//                             disabled={!isPasswordValid}
//                         >
//                             Sign Up
//                         </button>
//                     </form>

//                     <p className="m-0 text-[10px] text-[#747474] text-center">
//                         Already have an account?
//                         <Link 
//                             state={location.state} 
//                             to='/login' 
//                             className="ml-[4px] text-[11px] underline decoration-teal-600 text-teal-600 cursor-pointer font-extrabold"
//                         >
//                             Sign In
//                         </Link>
//                     </p>

//                     <div className="text-center text-[10px] text-[#747474] my-[10px]">Or</div>

//                     <div className="w-full flex flex-col gap-[15px]">
//                         <GoogleLogin />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }