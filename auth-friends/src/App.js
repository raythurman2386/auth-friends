import React from 'react';
import { Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

//material
import { makeStyles } from '@material-ui/core/styles';

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar {...props} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/addfriend' component={AddFriend} />
      <Route exact path='/' component={Login} />
    </div>
  );
}

export default App;

const useStyles = makeStyles(theme => ({
  app: {
    width: '100%',
    margin: '0 auto'
  }
}));
