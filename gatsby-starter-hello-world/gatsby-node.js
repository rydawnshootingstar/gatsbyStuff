// this will run when a new node is created, to dynamically create pages from files in our filesystem
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
// we wanna generate a slug field for each blog post, which will have the internal type of MarkdownRemark
const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    //console.log(JSON.stringify(node, undefined, 2));
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

// creates new pages on server startup
// NOTE: different graphql implementation than in our components. calls return a promise
//
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
