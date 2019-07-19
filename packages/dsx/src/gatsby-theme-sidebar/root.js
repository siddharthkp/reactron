import React from 'react'
import { Link } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

// TODO: move navigation to page context
import navigation from './navigation'

function Sidebar({ Layout, Main, Sidebar, Content, ...props }) {
  const pages = props.data.allMdx.edges

  return (
    <Layout>
      <Main>
        <Sidebar className="sidebar">
          <SkipNavLink />
          {navigation.map(section => (
            <Section
              key={section.title}
              pages={pages}
              title={section.title}
              items={section.items}
            />
          ))}
        </Sidebar>
        <SkipNavContent />
        <Content>{props.children}</Content>
      </Main>
    </Layout>
  )
}

function Section(props) {
  return (
    <section>
      <h4 style={{ margin: 0 }}>{props.title}</h4>
      <ul>
        {props.items.map(name => {
          // find matching page
          const matchingPage = props.pages.find(function({ node }) {
            return node.frontmatter.title === name
          })

          if (matchingPage) {
            const { slug } = matchingPage.node.fields
            const { title } = matchingPage.node.frontmatter
            return (
              <li key={name}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          } else {
            return <li key={name}>{name}</li>
          }
        })}
      </ul>
    </section>
  )
}

export default Sidebar
