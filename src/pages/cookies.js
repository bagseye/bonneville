import React from "react"
import Seo from "../components/SEO"
import Banner from "../components/Banner"
import Layout from "../components/Layout"

const CookiesPage = () => {
  return (
    <>
      <Seo />
      <Layout>
        <Banner content="This is the cookies page, but there are no chocolate chips to be found here" />
        <p>
          Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu
          libero tincidunt pretium vel et nunc. Maecenas elementum fermentum
          dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies
          sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut.
          Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat
          volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna.
          Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae
          luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum
          vulputate. Donec vel auctor velit.
        </p>
      </Layout>
    </>
  )
}

export default CookiesPage
