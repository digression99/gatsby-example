import React, { useState } from "react"
import { Link } from "gatsby"

export default () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(state => !state)
  }

  return (
    <div
      style={{
        color: "purple",
        fontSize: "36px",
      }}
    >
      <Link to="/about">to about</Link>
      <h1>Hello wow.</h1>
      <p>What a world.</p>
      <div>state is : {state}</div>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <button onClick={handleClick}>This is button</button>
    </div>
  )
}
