import React, { useState } from "react"
import Header from "../components/header"

export default () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(state => !state)
  }

  return (
    <div>
      <Header headerText="Index page" />
      <div
        style={{
          color: "purple",
          fontSize: "20px",
        }}
      >
        <h1>Hello wow.</h1>
        <p>What a world.</p>
        <div>state is : {state}</div>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <button onClick={handleClick}>This is button</button>
      </div>
    </div>
  )
}
