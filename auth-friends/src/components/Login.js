import React from 'react';
import useForm from 'react-hook-form';
import { axiosWithAuth as axios } from '../utils/axiosConfig';

const Login = props => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);

    axios()
      .post('/login', data)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  };

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
