import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'
import { Eye, EyeOff } from 'lucide-react';
import GoogleLogin from '../components/GoogleLogin';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
import Loader from './Loader';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn,loading,setLoading } = useAuth()
  const location = useLocation()
  // console.log(location.state)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        Swal.fire({
          icon: "success",
          title: `Welcome ${result.user.displayName}`,
          text: "Login Successfully",
          timer: 2000,
        });
        navigate(location.state || '/')
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

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <StyledWrapper>
        <div className="form-container">
          <img className='w-40 mx-auto' src={logo} alt="logo" />
          <p className="title">Login To Eco Track</p>
          <form onSubmit={handleLogin} className="form">
            <input name='email' type="email" className="input" placeholder="Email" />
            {/* <input type="password" className="input" placeholder="Password" /> */}
            <div className="password-group">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                name='password'
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
            Don't have an account?<Link state={location.state} to='/register' className="sign-up-link">Sign up</Link>
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

// Everything on tailwind

// import React, { useState } from 'react';
// import logo from '../assets/logo.png';
// import { Eye, EyeOff } from 'lucide-react';
// import GoogleLogin from '../components/GoogleLogin';
// import { Link } from 'react-router';
// import useAuth from '../hooks/useAuth';
// import Swal from 'sweetalert2';
// import { useLocation, useNavigate } from 'react-router';
// import Loader from './Loader';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { signIn, loading, setLoading } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     signIn(email, password)
//       .then((result) => {
//         Swal.fire({
//           icon: "success",
//           title: `Welcome ${result.user.displayName}`,
//           text: "Login Successfully",
//           timer: 2000,
//         });
//         navigate(location.state || '/');
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong!",
//         });
//         setLoading(false);
//       });
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   // Defining the font stack here to keep the JSX cleaner, 
//   // but it is applied via Tailwind's arbitrary value syntax below.
//   const fontStack = "font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif]";

//   return (
//     <div className='flex justify-center items-center h-screen bg-gray-50'>
//       {/* Form Container */}
//       <div className="w-[350px] min-h-[500px] bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-[20px_30px] box-border">
        
//         <img className='w-40 mx-auto' src={logo} alt="logo" />
        
//         {/* Title */}
//         <p className={`${fontStack} text-center text-[28px] font-extrabold my-2.5 mb-[30px]`}>
//           Login To Eco Track
//         </p>

//         <form onSubmit={handleLogin} className="w-full flex flex-col gap-[18px] mb-[15px]">
//           <input 
//             name='email' 
//             type="email" 
//             className="w-full rounded-[20px] border border-[#c0c0c0] outline-none px-[15px] py-3 text-sm" 
//             placeholder="Email" 
//           />
          
//           <div className="relative w-full">
//             <input
//               type={showPassword ? "text" : "password"}
//               className="w-full rounded-[20px] border border-[#c0c0c0] outline-none px-[15px] py-3 text-sm"
//               placeholder="Password"
//               name='password'
//             />
//             <button
//               type="button"
//               className="absolute right-[15px] top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-[#747474] flex items-center hover:text-black"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//             </button>
//           </div>

//           <p className="text-right m-0">
//             {/* Page Link Label */}
//             <span className={`${fontStack} cursor-pointer text-[9px] font-bold text-[#747474] underline hover:text-black`}>
//               Forgot Password?
//             </span>
//           </p>

//           {/* Form Button */}
//           <button className={`${fontStack} w-full py-2.5 px-[15px] rounded-[20px] border-none bg-[#00C853] text-white cursor-pointer shadow-[0px_3px_8px_rgba(0,0,0,0.24)] active:shadow-none hover:bg-[#00b34a] transition-colors`}>
//             Log in
//           </button>
//         </form>

//         {/* Sign Up Label */}
//         <p className={`${fontStack} text-center text-[10px] text-[#747474] m-0`}>
//           Don't have an account?
//           {/* Sign Up Link */}
//           <Link 
//             state={location.state} 
//             to='/register' 
//             className={`${fontStack} ml-1 text-[11px] underline decoration-teal-600 text-teal-600 cursor-pointer font-extrabold`}
//           >
//             Sign up
//           </Link>
//         </p>

//         <div className='text-center text-gray-400 text-xs my-4'>Or</div>

//         {/* Note: Your original styled-components applied styles to .google-login-button.
//            Since that component is imported, you might need to pass the font class 
//            to it or wrap it in a div that applies the font.
//         */}
//         <div className={`flex flex-col justify-start gap-[15px] mt-5 w-full ${fontStack}`}>
//           <GoogleLogin />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;