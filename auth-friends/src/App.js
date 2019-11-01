import React from 'react';
import Login from './components/Login';
import { Link, Route } from 'react-router-dom';

function App(props) {
  // console.log(props);
  return (
    <div className='App'>
      <h1>Auth Friends</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
