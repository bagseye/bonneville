exports.createPages = ({ actions }) => {
    const { createPage } = actions
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
    ]
    pageData.forEach(page => {
        createPage({
            path: `/${page.name}`,
            component: require.resolve(`./src/templates/page-template.js`),
            context: { page },
        })
    })
}