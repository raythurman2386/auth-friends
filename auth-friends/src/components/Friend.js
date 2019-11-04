import React, { useState } from 'react';
import { axiosWithAuth as axios } from '../utils/axiosConfig';

// Material Items
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Friend = props => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    name: props.friend.name,
    age: props.friend.age,
    email: props.friend.email
  });

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(data);
    axios()
      .put(`/friends/${id}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setIsEditing(false);
    // props.history.push('/dashboard');
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios()
      .delete(`/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  };

  return !isEditing ? (
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
        onClick={() => setIsEditing(!isEditing)}
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
  ) : (
    <div className={classes.container}>
      <Typography variant='h5' component='h4'>
        <input name='name' value={data.name} onChange={e => handleChange(e)} />
      </Typography>
      <Typography variant='h6' component='h6'>
        <input name='age' value={data.age} onChange={e => handleChange(e)} />
      </Typography>
      <Typography variant='h6' component='h6'>
        <input
          name='email'
          value={data.email}
          onChange={e => handleChange(e)}
        />
      </Typography>
      <Button
        className={classes.buttons}
        fullWidth
        variant='contained'
        color='secondary'
        onClick={e => handleSubmit(e, props.friend.id)}
      >
        Submit
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
