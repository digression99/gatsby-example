import React from "react"
import Header from "../components/header"

export default () => {
  return (
    <div>
      <Header headerText="This is contact page" />
      This is contact page.
      <h1>Hi, i'd love to talk! email me!</h1>
      <a href="mailto:me@example.com">ThisIsMe@example.com</a>
    </div>
  )
}
