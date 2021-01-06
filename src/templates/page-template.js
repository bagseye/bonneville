import React from "react"
import Banner from "../components/Banner"
import Seo from "../components/SEO"

export default ({ pageContext: { page } }) => (
  <>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <Banner content={page.title} />
      <p>{page.content}</p>
    </div>
  </>
)
