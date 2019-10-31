import React from 'react';
import useForm from 'react-hook-form';
import { axiosWithoutAuth } from '../utils/axiosConfig';

const Login = props => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  // console.log(watch('username'));
  // console.log(watch('password'));

  // { username: 'Lambda School', password: 'i<3Lambd4' }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login Component</h2>
      {errors.username && <span>This field is required</span>}
      <input
        name='username'
        ref={register({ required: true })}
        defaultValue='Lambda School'
        placeholder='Username'
      />
      {errors.password && <span>This field is required</span>}
      <input
        name='password'
        ref={register({ required: true })}
        defaultValue='i<3Lambd4'
        placeholder='Password'
      />

      <button>Submit</button>
    </form>
  );
};

export default Login;
