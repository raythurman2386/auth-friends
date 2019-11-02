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
      <Grid container spacing={3}>
        {friends &&
          friends.map(item => (
            <Grid key={item.id} item xs={3}>
              <Paper className={classes.paper}>
                <Friend friend={item} />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Dashboard;

// Material Styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    margin: '2rem auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));
