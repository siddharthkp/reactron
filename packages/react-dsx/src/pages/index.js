import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

function BlogIndex(props) {
  const pages = props.data.allMdx.edges

  const home = getHomePage(pages)

  return (
    <Layout>
      <h1>Name of library</h1>
      Start here: <Link to={home.fields.slug}>{home.frontmatter.title}</Link>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            home
          }
        }
      }
    }
  }
`

function getHomePage(pages) {
  const explicitlyMarked = pages.find(function({ node }) {
    if (node.frontmatter.home) return true
  })

  // default to first page
  // if it isn't explicity marked
  if (explicitlyMarked) return explicitlyMarked.node
  else return pages[0].node
}
