const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsForsale {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsForsale.edges.map(({ node: forsale }) => {
        createPage({
          path: `forsale/${forsale.slug}`,
          component: path.resolve(`./src/templates/forsale.js`),
          context: {
            slug: forsale.slug,
          },
        })
      })
      resolve()
    })
  })
}
