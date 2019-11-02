import React from 'react';
import useForm from 'react-hook-form';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
import { Copyright } from './Login';

// Material
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const AddFriend = props => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios()
      .post('/friends', data)
      .then(res => {
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add Friend
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Friend Name'
                autoFocus
                inputRef={register}
                InputProps={{ className: classes.input }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='age'
                label='Age'
                type='number'
                id='age'
                inputRef={register}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Add Friend
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#222',
      color: '#888'
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: 'white'
  },
  input: {
    color: '#888'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default AddFriend;
