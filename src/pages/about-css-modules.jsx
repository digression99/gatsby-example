import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"

const User = props => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={props.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}

export default () => {
  return (
    <Container>
      <h1>About css modules</h1>
      <p>Css modules are cool</p>
      <User
        username="Jane doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="Hey I'm jane doe."
      ></User>
      <User
        username="Bob smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="Hey I'm Bob Smith."
      ></User>
    </Container>
  )
}
