import React from "react"
import Layout from "../components/layout"

export default ({ pageContext: { page } }) => (
    <Layout>
        <main>
            <h1>{page.title}</h1>
        </main>
    </Layout>
)