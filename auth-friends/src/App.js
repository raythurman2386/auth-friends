import React from 'react';
import { Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App(props) {
  return (
    <div className='App'>
      <Navbar {...props} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/addfriend' component={AddFriend} />
      <Route component={Login} />
    </div>
  );
}

export default App;
