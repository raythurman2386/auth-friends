import React from 'react';

// Material Items
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Friend = props => {
  const classes = useStyles();

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
      <Button fullWidth color='primary'>
        Edit
      </Button>
      <Button fullWidth color='secondary'>
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
  }
}));
