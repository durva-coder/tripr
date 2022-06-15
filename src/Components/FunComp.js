import React, { useState, useEffect } from 'react'

function FunComp() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const [name, setName] = useState({ firstName: '', lastName: '' })

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const decrement1 = () => {
    setCount1(count1 - 1)
  }

  const incrementBy10 = () => {
    for (var i = 0; i < 10; i++) {
      setCount((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    console.log(
      'useEffect is componentDidMount and componentDidUpdate of functional component'
    )
  }, [count, count1])

  //as we passed count only, useeffect will be callec only if count value is updated
  //to pass multiple items, use like this:  [count,count1]

  return (
    <>
      <h1>Hello World</h1>

      {/* <h1>count value: {count}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={incrementBy10}>+ by 10</button>
        <button onClick={decrement}>-</button>
      </div>
      <h1>2nd counter Value: {count1} </h1>
      <button onClick={decrement1}>-</button>

      <form>
        <input
          type='text'
          placeholder='firstName'
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value })
          }}
        ></input>
        <input
          type='text'
          placeholder='lastName'
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value })
          }}
        ></input>
      </form>
      {name.firstName}
      {name.lastName} */}
    </>
    //here spread operator is used to print firstname and lastname together
    //if you remove spread operator, only one of them is going to be printed on screen
  )
}

export default FunComp
