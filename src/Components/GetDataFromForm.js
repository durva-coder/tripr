import React, { Component } from 'react'
import fire from './Firebase'
import '../Components/Style.css'

var dup = [{}]
var temp = []
export class GetDataFromForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flight: [],
      showMore: {},
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount method called')
    var ref = fire.database().ref().child('FlightsData')
    ref.on('value', (snap) => {
      dup = snap.val()
      console.log(dup)
    })
  }

  handleSubmit = (e) => {
    if (fire.auth().currentUser != null) {
      console.log('user' + fire.auth().currentUser.uid)
    }
    e.preventDefault()
    if (this.props.departureDate === '' || this.props.destination === '') {
      alert('Please enter details.')
    }

    for (var i = 0; i < dup.length; i++) {
      if (
        dup[i].deptDate === this.props.departureDate &&
        dup[i].destination === this.props.destination &&
        dup[i].source === this.props.source &&
        this.props.adults !== 0
      ) {
        temp[i] = dup[i]
        console.log('data found at: ' + i)
      } else if (
        this.props.destination !== '' &&
        this.props.source !== '' &&
        this.props.adults === 0
      ) {
        alert('Please enter no of adults')
        break
      } else {
        console.log('different data')
      }
    }
    this.setState({
      flight: temp,
    })

    if (
      this.props.destination !== '' &&
      this.props.source !== '' &&
      temp.length === 0
    ) {
      alert('No data available')
    }
    temp = []

    // refernce.push(data)
    // fire
    //   .database()
    //   .ref('search')
    //   .ref('destination')
    //   .push(this.props.destination)
    // fire.database().ref('search'). .push('hello dhaval')
  }

  handleInfo(key) {
    //alert('value:' + para.seats)
    this.setState((prevState) => ({
      showMore: {
        [key]: !(
          Object.keys(prevState.showMore).length > 0 && prevState.showMore[key]
        ),
      },
    }))

    // let ref = fire.database().ref('history')
    // ref.child(fire.auth().currentUser.uid).push(key)
  }

  // info = (value) => {
  //   return this.state.showMore ? <div>{value.seats}</div> : null
  // }

  renderMap = () => {
    if (this.state.flight !== null) {
      return Object.entries(this.state.flight).map(([key, value]) => (
        <div key={key}>
          <div class='cardview'>
            <div class='source'>{value.airlines}</div>
            <div class='timing'>
              {value.deptTime}-{value.arrivalTime}
            </div>
            <div class='duration'>{value.duration}</div>
            <div class='source'>{value.source}</div>
            <div class='destination'>{value.destination}</div>
            <div class='departure'>{value.deptDate}</div>
            <div class='price'>{value.price}</div>
            <button
              class='info-btn'
              hidden={value.seats == null ? true : false}
              onClick={(e) => {
                e.preventDefault()
                this.handleInfo(key)
              }}
            >
              More info
            </button>
            {Object.keys(this.state.showMore).length > 0 &&
              this.state.showMore[key] && (
                <div class='cardview2'>
                  <div class='more-info' id={`id-${key}`}>
                    {' '}
                    <div class='seatsavailable'>
                      <p>Seats Available: </p> {value.seats}
                    </div>
                    <div class='airports'>
                      <div class='airport'>
                        <p>Source: </p>
                        {value.dept}
                      </div>
                      <div class='airport'>
                        <p>Destination: </p>
                        {value.arrival}
                      </div>
                      <div>
                        {/* <button
                        class='book-btn'
                        onClick={(e) => {
                          e.preventDefault()
                          let link = value.link
                          window.open({ link }, '_blank')
                        }}
                      >
                        Book
                      </button> */}
                        <a
                          class='book-btn'
                          href={value.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      ))
    } else {
      alert('No data available')
    }
  }

  render() {
    return (
      <div>
        <button class='sub-btn' onClick={this.handleSubmit}>
          Submit Data
        </button>
        {this.renderMap()}
      </div>
    )
  }
}

export default GetDataFromForm
