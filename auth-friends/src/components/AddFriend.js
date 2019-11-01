import React from 'react';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
import useForm from 'react-hook-form';

const AddFriend = props => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios()
      .post('/friends', data)
      .then(res => {
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name='name'
        ref={register({ required: true })}
        placeholder='Name'
      />
      <input name='age' ref={register({ required: true })} placeholder='Age' />
      <input
        type='email'
        name='email'
        ref={register({ required: true })}
        placeholder='Email'
      />
      <button>Submit</button>
    </form>
  );
};

export default AddFriend;
