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
            title: "Personal Profile"
        },
        {
            name: "contact",
            title: "Get in Touch"
        },
        {
            name: "privacy",
            title: "Privacy Policy",
        },
        {
            name: "cookies",
            title: "Cookie Consent",
        },
        {
            name: "404",
            title: "Oops. This Page Does Not Exist",
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