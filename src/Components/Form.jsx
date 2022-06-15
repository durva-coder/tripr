import React, { Component } from 'react'
import GetDataFromForm from './GetDataFromForm'
import '../Components/Style.css'
import pic1 from '../Components/pic1.svg'
import FunComp from './FunComp'
import { Route } from 'react-router'
import {
  BrowserRouter as Router,
  Link,
  Navlink,
  Switch,
} from 'react-router-dom'

export class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      source: '',
      destination: '',
      departuredate: '',
      adults: 0,
      children: 0,
      infants: 0,
    }
  }

  tryDate() {
    if (this.state.journeyType == 'Round Trip') {
      return (
        <input
          type='date'
          name='returnDate'
          value={this.state.returnDate}
          onChange={this.handleInfo}
        />
      )
    }
  }

  foo() {
    console.log('baz')
    window.scrollTo(0, 2000)
  }

  handleInfo = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { flights } = this.state
    return (
      <div>
        <div class='main'>
          <div class='main-container'>
            <div class='main-content'>
              <h1>Book your Tickets!</h1>
              <p>
                Tripr allows you to find the best way to reach your Destination
              </p>
              <button class='main-btn' onClick={() => this.foo()}>
                <a>Get Started</a>
              </button>
            </div>
            <div class='main-img-container'>
              <img src={pic1} alt='Error' id='main-img' />
            </div>
          </div>
        </div>

        <div class='canvas'>
          <div class='center'>
            <div class='property-card'>
              <a href='#'>
                <div class='property-image'></div>
              </a>
              <div class='property-image-title'>
                <h5>Try Searching</h5>
              </div>
              <div class='property-description'>
                <h5> Accurate Flight Search </h5>
                <p>
                  Here at Tripr we make sure that our Users get accurate data
                  about the flights that are available as per Users demand.
                </p>
              </div>
              <a href='#'>
                <div class='property-social-icons'></div>
              </a>
            </div>

            <div class='property-card'>
              <a href='#'>
                <div class='property-image1'></div>
              </a>
              <div class='property-image-title'>
                <h5>Let's Check</h5>
              </div>
              <div class='property-description'>
                <h5> Latest Flight Status </h5>
                <p>
                  Tripr makes sure that our Users gets latest status for the
                  Flight they choose.
                </p>
              </div>
              <a href='#'>
                <div class='property-social-icons'></div>
              </a>
            </div>

            <div class='property-card'>
              <a href='#'>
                <div class='property-image2'></div>
              </a>
              <div class='property-image-title'>
                <h5>Free to use</h5>
              </div>
              <div class='property-description'>
                <h5> Free Platform </h5>
                <p>
                  Tripr is a free platform, developed for helping the Society.
                  If you want to support us you can Donate!
                </p>
              </div>
              <a href='#'>
                <div class='property-social-icons'></div>
              </a>
            </div>
          </div>
        </div>

        <div class='search' id='search'>
          <div class='search__container'>
            <div class='search__content'>
              <h1>Search here</h1>
            </div>
            <div class='form'>
              <form onSubmit={this.handleSubmit}>
                <div class='data-form'>
                  <h1>Let's find a Flight as per your convenience</h1>
                  <div>
                    <input
                      type='text'
                      placeholder='Source'
                      name='source'
                      value={this.state.source}
                      onChange={this.handleInfo}
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Destination'
                      name='destination'
                      value={this.state.destination}
                      onChange={this.handleInfo}
                    />
                  </div>
                  <div>
                    <input
                      type='date'
                      placeholder='select Date'
                      name='departuredate'
                      value={this.state.departuredate}
                      onChange={this.handleInfo}
                    />
                  </div>
                  <div>{this.tryDate()}</div>
                  <div>
                    <input
                      type='number'
                      onkeypress='return event.charCode >= 48'
                      min='1'
                      oninput="validity.valid||(value='');"
                      placeholder='No. of Adults'
                      name='adults'
                      value={this.state.adults}
                      onChange={this.handleInfo}
                    />
                  </div>
                  <div>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      oninput="validity.valid||(value='');"
                      placeholder='No. of Children'
                      name='children'
                      value={this.state.children}
                      onChange={this.handleInfo}
                    />
                  </div>
                  <div>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      oninput="validity.valid||(value='');"
                      placeholder='No. of Infants'
                      name='infants'
                      value={this.state.infants}
                      onChange={this.handleInfo}
                    />
                  </div>
                </div>
                <div>
                  <GetDataFromForm
                    source={this.state.source}
                    destination={this.state.destination}
                    departureDate={this.state.departuredate.toString()}
                    adults={this.state.adults}
                  ></GetDataFromForm>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class='footer__container'>
          <div class='footer__links'>
            <div class='footer__link--wrapper'>
              <div class='footer__link--items'>
                <h2>About Website</h2>
                <a href='mailto:tripperplan2020@gmail.com'>Email Us!</a>
                <a
                  href='terms'
                  onClick={() => {
                    ;<Link to='/terms'>terms & conditions</Link>
                  }}
                >
                  Terms & Conditions
                </a>
              </div>
              <div class='footer__link--items'>
                <h2>About Developers</h2>
                <a href='mailto:agrawaldhaval45@gmail.com'>Email</a>
                <a href='/instagram'>Instagram</a>
              </div>
            </div>
          </div>
          <div class='rights'>
            <p>Copyrights Tripr 2021. All rights reserved</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
