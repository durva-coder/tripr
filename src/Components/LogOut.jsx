import React, { Component } from 'react'
import fire from './Firebase'
import '../Components/Style.css'
import pic2 from '../Components/pic2.svg'
import { Link } from 'react-router-dom'

//console.log(fire.auth().currentUser.displayName)
export class LogOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  handleLogOut = () => {
    fire.auth().signOut()
    console.log('logged out successfully')
  }

  componentDidMount() {
    var ref = fire
      .database()
      .ref()
      .child('users')
      .child(fire.auth().currentUser.uid)
    ref.on('value', (snap) => {
      this.setState({
        name: snap.val().name,
      })
    })
    //console.log(user.name)
  }

  render() {
    return (
      <div class='main'>
        <div class='main-container'>
          <div class='main-content'>
            <h1>Hello {this.state.name.toUpperCase()} </h1>
            <button class='btn' id='logout' onClick={this.handleLogOut}>
              LogOut
            </button>
            <a
              class='glass-button'
              id='redirect'
              href='/'
              onClick={() => {
                ;<Link to='/'>Home</Link>
              }}
            >
              Go to Home
            </a>
            <p>Welcome to TRIPR </p>
            <p>
              Tripr allows you to find the best way to reach your Destination
            </p>
          </div>
          <div class='main-img-container'>
            <img src={pic2} alt='Error' id='main-img' />
          </div>
        </div>
      </div>
    )
  }
}

export default LogOut
