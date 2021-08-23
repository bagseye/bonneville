import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const PageTemplate = ({ pageContext: { page } }) => {
  return (
    <>
      <Seo title={page.name} description={page.title} />
      <Layout>
        <div className="page-standard">
          <Banner content={page.title} />
          <p>{page.content}</p>
        </div>
      </Layout>
    </>
  )
}

export default PageTemplate
