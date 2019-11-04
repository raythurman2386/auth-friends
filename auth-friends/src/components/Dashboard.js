import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosConfig';
import Friend from './Friend';
import { Copyright } from './Login';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const Dashboard = () => {
  const classes = useStyles();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, [friends]);

  return (
    <>
      <CssBaseline />
      <Container component='main' className={classes.root} maxWidth='lg'>
        {friends &&
          friends.map(item => (
            <Paper key={item.id} className={classes.paper}>
              <Friend friend={item} />
            </Paper>
          ))}
      </Container>
      <Box mt={5}>
        <Copyright />
      </Box>
    </>
  );
};

export default Dashboard;

// Material Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#222'
  },
  paper: {
    padding: theme.spacing(1),
    margin: '1rem auto 0',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '325px',
    height: 200
  }
}));
