import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// class Signin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoggedin: false,
//             test: 'qewry'
//         }
//     }

//     componentDidMount() {
//         axios.get('/auth/checkLogging').
//         then((x) => {
//             console.log('SFSF', x);
//             if (x.data.googleId) {
//                 this.setState({
//                    isLoggedin: true
//                 })
//             } else {
//                this.setState({
//                    isLoggedin: false
//                })
//             }
//         })
//        }

//     render() {
//         if (this.state.isLoggedin) {
//             return <Redirect to={{ pathname: '/profile', state: { referrer: this.state.test } }} />
//         } else {
//         return (
//             <div>
//                 <h1>This is the Signin page </h1>
//                 <form action="/login" method="post">
//                     <div>
//                         <label>Username:</label>
//                         <input type="text" name="username"/>
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input type="password" name="password"/>
//                     </div>
//                     <div>
//                         <input type="submit" value="Log In"/>
//                     </div>
//                 </form>
//                 <a href="/auth/google">Sign In with Google</a>
//             </div>
//         )
//         }
//     }
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function Signin(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
        <a href="/auth/google"><button className={'btn btn-success'}>Sign In with Google</button></a>
        <a href="/auth/facebook"><button className={'btn btn-danger'}>Login with Facebook</button></a>

      </Paper>
    </main>
  );
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);