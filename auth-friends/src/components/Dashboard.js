import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosConfig';
import Friend from './Friend';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
  const classes = useStyles();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.root}>
      {friends &&
        friends.map(item => (
          <Grid key={item.id} item xs={3}>
            <Paper className={classes.paper}>
              <Friend friend={item} />
            </Paper>
          </Grid>
        ))}
    </div>
  );
};

export default Dashboard;

// Material Styles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    padding: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gridRowGap: '2rem'
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
