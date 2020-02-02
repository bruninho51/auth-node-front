import React from 'react';
import Auth from '../api/Auth';
import { Redirect } from 'react-router-dom';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { ErrorStackedbar } from '../components/Alert';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      error: {
          color: 'red'
      }
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: Auth.isAuthenticate(),
            email: '',
            pwd: '',
            error: '',
            isError: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.component = this.component.bind(this);
        this.login = this.login.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    
    login() {
        Auth.authenticate(this.state.email, this.state.pwd, this);
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    handleError() {
        this.setState({ isError: false })
    }

    component() {
        const { classes } = this.props;
        const isError = this.state.isError;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                   <Avatar className={classes.avatar}>
                       <LockOutlinedIcon />
                   </Avatar>
                   <Typography>
                       Sign in
                   </Typography>
                   <form className={classes.form} noValidate>
                       <TextField 
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           id="email"
                           label="E-mail"
                           name="email"
                           autoComplete="email"
                           value={this.state.email}
                           autoFocus
                           onChange={this.handleChange}
                       />
                       <TextField 
                           variant="outlined"
                           margin="normal"
                           required
                           fullWidth
                           name="pwd"
                           label="Senha"
                           type="password"
                           id="pwd"
                           value={this.state.pwd}
                           autoComplete="current-password"
                           onChange={this.handleChange}
                       />
                       <Button
                           type="button"
                           fullWidth
                           variant="contained"
                           color="primary"
                           onClick={this.login}
                           className={classes.submit}
                       >
                           Entrar
                       </Button>
                   </form>
                </div>
                <ErrorStackedbar open={isError} handleClose={this.handleError}>
                    {this.state.error}
                </ErrorStackedbar>
            </Container>
        );
    }

    render() {
        return (
            this.state.redirect &&
            <Redirect to='/' /> ||
            this.component()
        );
    }
}

export default withStyles(styles)(Login);