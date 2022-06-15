import { logDOM } from '@testing-library/dom'
import React, { Component } from 'react'
import fire from './Firebase'
import '../Components/Style.css'
import SignUp from './SignUp'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: null,
      loginDisabled: true,
    }
  }

  handleLogin = () => {
    if (this.state.email.length === 0 && this.state.password.length === 0) {
      alert('Please enter login credentials')
    }
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((e) => {
        console.log('Sign In successful')
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
            alert('Incorrect Email-id')
            break
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            this.setState({
              errorMessage: err.message,
            })
            break
          case 'auth/wrong-password':
            alert('Incorrect Password')
            break
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  selectForm = () => {
    this.setState((prevState) => ({
      loginDisabled: !prevState.loginDisabled,
    }))

    return (
      <div class='main'>
        <div class='signup'>
          <form action='#' class='signup_form'>
            <div class='inputs'>
              <label for='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div class='inputs'>
              <label for='password'>Password</label>
              <input
                id='password'
                type='password'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }

  render() {
    return (
      <>
        <div class='toggle'>
          <button
            class='btn'
            id='toggle-btn'
            onClick={this.selectForm}
            disabled={this.state.loginDisabled}
          >
            login
          </button>
          <button
            class='btn'
            id='toggle-btn'
            onClick={this.selectForm}
            disabled={!this.state.loginDisabled}
          >
            Sign Up
          </button>
        </div>
        {this.state.loginDisabled ? (
          <div class='main'>
            <div class='signup'>
              <form action='#' class='signup_form'>
                <div class='img-overlay'></div>
                <h1>Login</h1>
                <div class='inputs'>
                  <label for='email'>Email</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div class='inputs'>
                  <label for='password'>Password</label>
                  <input
                    id='password'
                    type='password'
                    placeholder='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button class='btn' id='login-btn' onClick={this.handleLogin}>
                  Login
                </button>
              </form>
            </div>
          </div>
        ) : (
          <SignUp></SignUp>
        )}
      </>
    )
  }
}

// export default Login
