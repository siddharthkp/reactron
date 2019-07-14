import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../components/Layout'

function ComponentTemplate(props) {
  const page = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  const componentsProps = getComponentProps(props)

  return (
    <Layout location={props.location} title={siteTitle}>
      <h1>{page.frontmatter.title}</h1>
      <p style={{ marginBottom: 72, color: '#6E7A8A' }}>
        {page.frontmatter.description}
      </p>
      <PropsTable props={componentsProps} />
      <MDXRenderer>{page.code.body}</MDXRenderer>

      <ul
        style={{
          marginTop: 72,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default ComponentTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
      }
      code {
        body
      }
    }
    allMdx(limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    allComponentMetadata {
      edges {
        node {
          displayName
          props {
            name
            type {
              name
              raw
              value
            }
            description {
              text
            }
            required
            defaultValue {
              computed
              value
            }
          }
        }
      }
    }
  }
`

function getComponentProps(props) {
  const page = props.data.mdx
  console.log(page)
  const allComponentMetadata = props.data.allComponentMetadata.edges

  const componentProps = allComponentMetadata.find(function({ node }) {
    return node.displayName === page.frontmatter.title
  })

  if (componentProps) return componentProps.node.props
  else return []
}

function PropsTable({ props }) {
  return (
    <>
      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th width="15%">name</th>
            <th width="70%">description</th>
            <th width="15%">default</th>
          </tr>
        </thead>
        <tbody>
          {props.map(function(
            { name, type, description, required, defaultValue },
            index
          ) {
            return (
              <tr key={index}>
                <td>
                  <code>
                    {name}
                    {required ? '*' : ''}
                  </code>
                </td>
                <td>
                  {description.text}
                  <br />
                  <code>{parseType(type)}</code>
                </td>
                <td>
                  <code>
                    {defaultValue ? cleanUpString(defaultValue.value) : ''}
                  </code>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

const parseType = type => {
  if (type.name === 'shape') {
    return 'shape ' + getShape(type.value)
  } else if (type.name === 'enum') {
    return 'one of: ' + getArray(type.value).join(', ')
  } else if (type.name === 'custom') {
    return replaceRaw(type.raw)
  } else if (type.name === 'union') {
    return 'one of: ' + getArray(type.value).join(' or ')
  } else {
    return type.name
  }
}

const getShape = value => {
  const shape = {}

  Object.keys(value).forEach(key => {
    shape[key] = value[key].name
  })

  return JSON.stringify(shape, null, 2)
}

const cleanUpString = string => {
  return string.replace(/"/g, '')
}

const getArray = elements => {
  return elements.map(function({ value }) {
    return cleanUpString(value)
  })
}
