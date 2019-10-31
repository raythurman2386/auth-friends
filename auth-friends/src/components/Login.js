import React, { useState } from 'react';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Component</h2>
      <input
        name='username'
        value={credentials.username}
        onChange={e => handleChange(e)}
        placeholder='Username'
      />
      <input
        name='password'
        value={credentials.password}
        onChange={e => handleChange(e)}
        placeholder='Password'
      />
      <button>Submit</button>
    </form>
  );
};

export default Login;
