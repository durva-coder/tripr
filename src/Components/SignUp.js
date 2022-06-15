import React, { Component } from 'react'
import fire from './Firebase'
import '../Components/Style.css'
import Login from './Login'

export class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      user: null,
      errors: {},
    }
  }

  handleSignUp = (e) => {
    e.preventDefault()
    let reference = fire.database().ref().child('users')
    if (this.state.password !== this.state.confirmPassword) {
      // window.alert('password Do not Match')
      alert('password Do not Match')
    } else if (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.name === 0
    ) {
      alert('Please fill up the Sign Up form correctly')
    } else {
      const data = {
        name: this.state.name,
        email: this.state.email,
      }
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((e) => {
          var currentUser = fire.auth().currentUser.uid
          reference
            .child(currentUser)
            .set({ name: this.state.name, email: this.state.email })
          let formIsValid = true
          let errors = {}

          if (!this.state.name) {
            formIsValid = false
            errors['name'] = '*Please enter your username.'
          }

          if (!this.state.email) {
            formIsValid = false
            errors['email'] = '*Please enter your email-ID.'
          }

          if (!this.state.password) {
            formIsValid = false
            errors['password'] = '*Please enter your password.'
          }

          if (!this.state.confirmPassword) {
            formIsValid = false
            errors['confirmPassword'] = '*Please enter your confirm password.'
          }

          if (
            !this.state.password.match(
              /^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/
            )
          ) {
            formIsValid = false
            errors['password'] = '*Please enter secure and strong password.'
            console.log('fail')
          } else {
            console.log('Sign up Successful: ' + e)
            this.setState({
              user: e,
            })
            console.log(e.email)
          }

          // window.alert("Sign Up Sucessfull" + e)

          this.setState({
            errors: errors,
          })
        })
        .catch((err) => {
          // window.alert("Error: "+ err.toString())
          alert('Error: ' + err.toString())
        })
    }
  }

  handleData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // validate(event) {
  //   var pass = event.target.value
  //   var reg = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{6,})/
  //   var test = reg.test(pass)
  //   if (test) {
  //     console.log('pass')
  //   } else {
  //     console.log('fail')
  //   }
  // }

  render() {
    return (
      <>
        <div class='main'>
          <div>
            <div class='signup'>
              <form action='#' class='signup_form'>
                <div class='img-overlay'></div>
                <h1>Join our platform to make your search easy</h1>
                <div class='inputs'>
                  <label for='name'>Name</label>
                  <input
                    id='name'
                    type='name'
                    placeholder='name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleData}
                  />
                </div>
                <p>{this.state.errors.name}</p>

                <div class='inputs'>
                  <label for='email'>Email</label>
                  <input
                    id='email'
                    type='email'
                    placeholder='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleData}
                  />
                </div>
                <p>{this.state.errors.email}</p>

                <div class='inputs'>
                  <label for='password'>Password</label>
                  <input
                    id='password'
                    type='password'
                    placeholder='password'
                    name='password'
                    //   password="^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})"

                    //  title="Please include at least 1 uppercase character, 1 lowercase character and 1 number."
                    value={this.state.password}
                    onChange={this.handleData}
                    // onChange={this.validate}
                  />
                </div>
                <p>{this.state.errors.password}</p>

                <div class='inputs'>
                  <label for='password2'>Confirm Password</label>
                  <input
                    id='password2'
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    //   password="^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})"

                    value={this.state.confirmPassword}
                    onChange={this.handleData}
                  />
                </div>
                <p>{this.state.errors.confirmPassword}</p>

                <button class='btn' onClick={this.handleSignUp}>
                  Sign Up
                </button>
                <p id='question'>
                  Already a User ? <span>Login Tripr</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SignUp
