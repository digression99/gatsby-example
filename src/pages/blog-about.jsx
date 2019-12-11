import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/blog-layout"

export default ({ data }) => {
  const title = data.site.siteMetadata.title

  return (
    <Layout>
      <h1>{title}</h1>
      <p>Were the only site running on your computer</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
