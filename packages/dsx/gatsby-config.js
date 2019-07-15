const path = require('path')
const directoryRoot = process.env.DIRECTORY_ROOT

module.exports = {
  siteMetadata: {
    title: `Components`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        extensions: ['.mdx', '.md'],
        path: path.join(directoryRoot),
        ignore: ['**/node_modules'],
        name: `components`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-smartypants`
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-react-docgen`,
    `gatsby-plugin-react-helmet`,
    'gatsby-theme-sidebar'
  ]
}
