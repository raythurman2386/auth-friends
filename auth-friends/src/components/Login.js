import React from 'react';
import useForm from 'react-hook-form';
import { axiosWithAuth as axios } from '../utils/axiosConfig';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  container: {
    margin: '2rem auto',
    display: 'flex',
    flexWrap: 'wrap',
    width: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  }
}));

const Login = props => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);

    axios()
      .post('/login', data)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dashboard');
      })
      .catch(err => console.log(err.response));
  };

  // { username: 'Lambda School', password: 'i<3Lambd4' }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
      <Typography variant='h3' component='h2'>
        Login
      </Typography>
      {errors.username && <span>This field is required</span>}
      <div>
        <Input
          className={classes.textField}
          label='Username'
          margin='normal'
          name='username'
          inputRef={register}
          defaultValue='Lambda School'
        />
      </div>

      {errors.password && <span>This field is required</span>}
      <div>
        <Input
          id='filled-basic'
          className={classes.textField}
          label='Password'
          margin='normal'
          variant='filled'
          name='password'
          inputRef={register}
          defaultValue='i<3Lambd4'
        />
      </div>
      <Button type='submit' variant='contained' className={classes.button}>
        Submit
      </Button>
    </form>
  );
};

export default Login;
