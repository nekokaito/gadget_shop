import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';

const Register = () => {

     const { createUser, user } = useAuth();

     const {
          register,
          handleSubmit,
          watch,
          formState: {
               errors
          }
     } = useForm();

     const dataSubmit = data => {
          console.log(data);
          createUser(data.email, data.password);
     }


     return (
          <div>
               <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Sign Up now!</h1>
                              <p className="py-6">
                                   Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                   quasi. In deleniti eaque aut repudiandae et a id nisi.
                              </p>
                         </div>
                         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                              <form className="card-body" onSubmit={handleSubmit(dataSubmit)}>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" {
                                             ...register('name', { required: true })
                                        } />
                                        {
                                             errors.name && (
                                                  <p className='text-red-500'>Please Fill Up Name</p>
                                             )
                                        }
                                   </div>
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
                                             <span className="label-text">Role</span>
                                        </label>
                                        <select className="select select-bordered w-full max-w-xs"
                                        {
                                             ...register("role", {required:true})
                                        }>
                                             
                                             <option value="buyer">Buyer</option>
                                             <option value="seller">Seller</option>
                                        </select>
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
                                             <a href="#" className="label-text-alt link link-hover">Already have an account? <Link to="/login">Login</Link></a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Sign Up</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;