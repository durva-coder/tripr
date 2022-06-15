import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ProductId: '',
      qty: 0,
    }
  }

  addtoCart = (pid) => {
    console.log(pid)
    this.setState({
      ProductId: pid,
      qty: this.state.qty + 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addtoCart(2)}>Add to Cart</button>
        <Cart qty={this.state.qty}></Cart>
      </div>
    )
  }
}

class Cart extends Component {
  constructor(props) {
    super(props)
    console.log('within constructor of cart component')
    this.state = {
      qty: props.qty,
    }
  }

  //   updateValue = () => {
  //     this.setState({
  //       qty: this.state.qty + 1,
  //     })
  //   }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Hello Dhaval</h1>
        {/* <h1>Quantity: {this.state.qty}</h1>
        <button onClick={this.updateValue}>Increase</button> */}
      </div>
    )
  }
  // componentDidMount() {
  //   console.log('within componentDidMount method')
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('within componentDidUpdate method')
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('within getderivedstatefromprops method')
  //   console.log(props.qty)
  //   console.log(state.qty)
  //   if (props.qty !== state.qty) {
  //     return { qty: props.qty }
  //   }
  //   return null
  // }
}
