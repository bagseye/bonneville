import React from "react"
import Seo from "../components/SEO"

export default ({ pageContext: { page } }) => (
  <>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  </>
)
