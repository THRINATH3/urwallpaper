import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import reg from '../pictures/reg.mp4'
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function onSubmit(data) {
    try {
      let res = await fetch('https://urwallpaper-react-x2el.vercel.app/user-api/user', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      let result= await res.json();
      if (result.message==='USER CREATED') {
        navigate('/login');
      }
      else
      {
        setErr(result.message);
      }
    } catch (err) {
      console.log(err);
      setErr(err.message);
    }
  }

  return (
    <div className='container containerFont'  >
      <div className='mt-5'>
        <h1 className='text-center'>Create an Account</h1>
        <p className='text-center'>Join our community and personalize your experience with stunning wallpapers!</p>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-10 mx-auto">
          {err && <p className='text-danger text-center'>{err}</p>}
          <form className='mb-5 mt-5 bg-dark p-5 shadow-lg mx-10' onSubmit={handleSubmit(onSubmit)} style={{ borderRadius: "50px" ,width:'100%'}}>
            <h2 className='text-center mt-3 text-light'>Sign Up</h2>

            {/* Username Field */}
            <div className='mb-3'>
              <label htmlFor="username" className='form-label text-light'>
                <FaUser className='mx-1 fs-5 pb-1' /> Username
              </label>
              <div className="input-group">
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  className='form-control' 
                  placeholder='abc123'
                  {...register('username', { 
                    required: 'Username is required',
                    minLength: {
                      value: 6,
                      message: 'Username must be at least 6 characters long'
                    }
                  })}
                />
              </div>
              {errors.username && <p className='text-danger'>*{errors.username.message}</p>}
            </div>

           
            {/* Password Field */}
            <div className='mb-3'>
              <label htmlFor="password" className='form-label text-light'>
                <RiLockPasswordFill className='mx-1 fs-3 pb-1' /> Password
              </label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  id="password" 
                  className='form-control'
                  placeholder='Password'
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long'
                    }
                  })}
                />
                <div className="input-group-append">
                  <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer', height: '37px' }}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              {errors.password && <p className='text-danger'>*{errors.password.message}</p>}
            </div>

            
             {/* Email Field */}
             <div className='mb-5'>
              <label htmlFor="email" className='form-label text-light'>
                <IoIosMail className='mx-1 fs-3 pb-1' /> Email
              </label>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className='form-control' 
                  placeholder='abc@gmail.com'
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address'
                    }
                  })}
                />
              </div>
              {errors.email && <p className='text-danger'>*{errors.email.message}</p>}
            </div>

            

            {/* Submit Button */}
            <div className='mb-3 text-center'>
              <button type="submit" className='btn btn-info text-white fs-5 sub' style={{borderRadius:'20px',width:'200px'}}>Register</button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 log mt-5">
          <video src={reg}   autoPlay muted playsInline loop style={{borderRadius:'50%',marginLeft:'10%',width:'90%'}}/>
        </div>
      </div>
    </div>
  );
}

export default Register;
