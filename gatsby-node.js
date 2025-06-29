const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            url
          }
        }
      }
    }  
  `)

  console.log(data)
  data.allMarkdownRemark.nodes.forEach(node => {
    const { url } = node.frontmatter;
    actions.createPage({
      path: `${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: { url }
    })
  });
}