import React from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../utils/axiosConfig';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Navar(props) {
  const classes = useStyles();
  const loggedIn = getToken();

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Auth Friends
          </Typography>
          <Button color='inherit'>
            {!loggedIn && <Link to='/login'>Login</Link>}
            {loggedIn && <span onClick={() => logout()}>Logout</span>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
