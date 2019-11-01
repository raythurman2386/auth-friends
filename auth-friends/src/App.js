import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

// components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { getToken } from './utils/axiosConfig';

function App(props) {
  const loggedIn = getToken();

  const logout = () => {
    localStorage.removeItem('token');
    return <Redirect to='/login' />;
  };

  // console.log(props);

  return (
    <div className='App'>
      <h1>Auth Friends</h1>
      <nav>
        <Link to='/'>Home</Link>
        {!loggedIn && <Link to='/login'>Login</Link>}
        {loggedIn && <Link to='/dashboard'>Dashboard</Link>}
        {loggedIn && <Link onClick={logout}>Logout</Link>}
      </nav>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
