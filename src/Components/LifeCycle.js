import React, { Component } from 'react'

export class LifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log('within constructor of lifecycle method')

    this.state = {
      qty: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('within getderivedstate method')
    return null
  }

  componentDidMount() {
    console.log('ComponentDidMount Method called')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate Method Called ')
  }

  updateQuantity = () => {
    this.setState({
      qty: this.state.qty + 1,
    })
  }

  decreaseQuantity = () => {
    this.setState({
      qty: this.state.qty - 1,
    })
  }

  resetQuantity = () => {
    this.setState({
      qty: 0,
    })
  }

  render() {
    return (
      <div>
        <h1>Quantity: {this.state.qty}</h1>
        <button onClick={this.updateQuantity}>Increase</button>
        <button onClick={this.decreaseQuantity}>Decrease</button>
        <button onClick={this.resetQuantity}>Reset</button>
      </div>
    )
  }
}

export default LifeCycle
