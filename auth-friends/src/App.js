import React from 'react';
import Login from './components/Login';

function App(props) {
  console.log(props);
  return (
    <div className='App'>
      <h1>Auth Friends</h1>
      <Login />
    </div>
  );
}

export default App;
