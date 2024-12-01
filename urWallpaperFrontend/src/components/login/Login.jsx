import React, { useContext, useEffect,useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { usercontext } from '../../context/userLoginContext';
import login from '../pictures/login.mp4'
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { onSubmit, loginStatus, err } = useContext(usercontext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  async function onSubmited(data) {
    onSubmit(data);
  }

  useEffect(() => {
    if (loginStatus) {
      navigate('/wallpapers');
    }
  }, [loginStatus]);

  return (
    <div className='container containerFont' style={{paddingTop:'140px'}}>
      <div className="row">
        <div className="col-lg-6 log">
          <video src={login}   autoPlay muted playsInline loop/>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-10 mx-auto">
        <form className='mb-5 mt-5 bg-dark p-5 shadow-lg mx-10' onSubmit={handleSubmit(onSubmited)} style={{borderRadius:"20px"}}>
        <h1 className='text-center'>Login</h1>
        {err && <p className='text-danger text-center'>{err}</p>}
        <div className='mb-3'>
          <label htmlFor="username" className='form-label'><FaUser className='mx-1 fs-5 pb-1' />Username</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            className='form-control'
            {...register('username', { 
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters long'
              }
            })}
          />
          {errors.username && <p className='text-danger'>{errors.username.message}</p>}
        </div>
        <div className='mb-3'>
              <label htmlFor="password" className='form-label'>
                <RiLockPasswordFill className='mx-1 fs-3 pb-1' />Password
              </label>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  id="password" 
                  className='form-control'
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
        <div className="text-center mb-3">
          <button type="submit" className='btn btn-warning sub' style={{borderRadius:'20px',width:'200px'}}>Login</button>
        </div>
        <p>If you don't have an account? <Link to="/register" className='createAccount text-warning'>Create account</Link></p>
      </form>
      </div>
      </div>
      
    </div>
  );
}

export default Login;
