import React from "react"
import { Link } from "gatsby"

const linkStyle = {
  marginRight: "10px",
}

export default ({ headerText }) => (
  <div
    style={{
      color: "teal",
    }}
  >
    <h1>{headerText}</h1>
    <div
      style={{
        display: "flex",
      }}
    >
      <Link to="/" style={linkStyle}>
        home
      </Link>
      <Link to="/about" style={linkStyle}>
        about
      </Link>
      <Link to="/contact" style={linkStyle}>
        contact
      </Link>
    </div>
  </div>
)
