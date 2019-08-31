const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Auto generate pages
  // Pages built using templates/page-template.js
  const pageData = [
    {
      name: "profile",
      title:
        "This is the profile page. You can change this title in gatsby-node.js",
      content:
        "Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu libero tincidunt pretium vel et nunc. Maecenas elementum fermentum dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut. Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna. Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum vulputate. Donec vel auctor velit.",
    },
    {
      name: "contact",
      title:
        "This is the contact page. You can change this title in gatsby-node.js",
      content:
        "Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu libero tincidunt pretium vel et nunc. Maecenas elementum fermentum dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut. Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna. Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum vulputate. Donec vel auctor velit.",
    },
    {
      name: "privacy",
      title:
        "This is the privacy page. You can change this title in gatsby-node.js",
      content:
        "Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu libero tincidunt pretium vel et nunc. Maecenas elementum fermentum dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut. Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna. Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum vulputate. Donec vel auctor velit.",
    },
    {
      name: "cookies",
      title:
        "This is the cookies page. You can change this title in gatsby-node.js",
      content:
        "Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu libero tincidunt pretium vel et nunc. Maecenas elementum fermentum dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut. Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna. Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum vulputate. Donec vel auctor velit.",
    },
    {
      name: "404",
      title:
        "This is the error page. You can change this title in gatsby-node.js",
    },
  ]
  pageData.forEach(page => {
    createPage({
      path: `/${page.name}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { page },
    })
  })

  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })

  // Create blog list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
