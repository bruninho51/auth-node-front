import React, { Component }  from 'react';
import axios from 'axios';
import config from './../config';
import { Redirect } from 'react-router-dom';

class Auth {
    constructor() {
        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(email, pwd, Login) {
        
        axios({
          url: `${config.API.URL}/auth`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8' 
          },
          data: {
            email: email,
            pwd: pwd
          }
        }).then(function(response) {
          if(response.data.auth) {
            localStorage.setItem(config.API.TOKEN_NAME, response.data.token);
            Login.setState({ redirect: true });
          }
        }).catch(function(err) {
          let msg = err;
          if(err.response) {
              msg = err.response.data.message;
          }
          Login.setState({
            error: msg,
            isError: true
          })
        });
    }

    isAuthenticate() {
      let token = localStorage.getItem(config.API.TOKEN_NAME);
      if(token != undefined) {
        return true;
      }

      return false;
    }

    logout() {
      localStorage.removeItem(config.API.TOKEN_NAME);
      return (<Redirect to='/' />);
    }
}

export default new Auth;