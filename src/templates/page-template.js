import React from "react"
import Layout from "../components/layout"

export default ({ pageContext: { page } }) => (
    <Layout>
        <div className="page-standard">
            <h1>{page.title}</h1>
        </div>
    </Layout>
)