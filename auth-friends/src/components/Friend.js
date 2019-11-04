import React from 'react';
import { axiosWithAuth as axios } from '../utils/axiosConfig';

// Material Items
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Friend = props => {
  const classes = useStyles();

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios()
      .delete(`/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  };

  return (
    <div className={classes.container}>
      <Typography variant='h5' component='h4'>
        Name: {props.friend.name}
      </Typography>
      <Typography variant='h6' component='h6'>
        Age: {props.friend.age}
      </Typography>
      <Typography variant='h6' component='h6'>
        {props.friend.email}
      </Typography>
      <Button
        className={classes.buttons}
        fullWidth
        variant='contained'
        color='primary'
      >
        Edit
      </Button>
      <Button
        className={classes.buttons}
        fullWidth
        variant='contained'
        color='secondary'
        onClick={e => handleDelete(e, props.friend.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Friend;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    maxWidth: '100%'
  },
  buttons: {
    marginTop: '8px'
  }
}));
