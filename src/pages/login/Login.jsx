import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
     const { userLogin, googleLogin } = useAuth();
     const navigate = useNavigate();

     const {
          register,
          handleSubmit,
          formState: {
               errors
          }
     } = useForm();

     const dataSubmit = data => {
          console.log(data);

     }
     const handleGoogleLogin = () => {
          googleLogin().then(() => {
               navigate('/');
          });

     }
     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                              <p className="py-6">
                                   Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                   quasi. In deleniti eaque aut repudiandae et a id nisi.
                              </p>
                         </div>
                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" {
                                             ...register('email', { required: true })
                                        } />
                                        {
                                             errors.name && (
                                                  <p className='text-red-500'>Please Fill Up Email</p>
                                             )
                                        }
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" {
                                             ...register('password', { required: true, minLength: 8 })
                                        } />
                                        {
                                             errors.password?.type === "required" && (
                                                  <p className='text-red-500'>Password Required</p>
                                             )
                                        }
                                        {
                                             errors.password?.type === "minLength" && (
                                                  <p className='text-red-500'>Minimum 8 Password</p>
                                             )
                                        }
                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control flex flex-col gap-3 mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                        <button on onClick={handleGoogleLogin} type='submit' className="btn "> <FaGoogle /> Google</button>

                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;