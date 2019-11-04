import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Copyright } from './components/Login';

// components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import Box from '@material-ui/core/Box';

//material
import { makeStyles } from '@material-ui/core/styles';

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Navbar {...props} />
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
        <Route exact path='/' component={Login} />
      </Switch>
      <Box mt={5} className={classes.footer}>
        <Copyright />
      </Box>
    </div>
  );
}

export default App;

const useStyles = makeStyles(theme => ({
  app: {
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#222',
    color: 'white',
    height: '100vh'
  },
  footer: {
    position: 'fixed',
    bottom: 50,
    left: '40%',
    textAlign: 'center'
  }
}));
