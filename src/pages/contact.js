import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Button from "../components/Button/button"

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h3);
  margin-bottom: 0.75rem;
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Get in touch"
        description="Contact Bonneville about your next project"
      />
      <Layout>
        <h1>Get in touch today</h1>
        <p>
          Fusce eu tincidunt felis. Ut auctor urna et nibh lacinia, id efficitur
          ipsum blandit. Aliquam vulputate sapien sit amet ante varius
          vestibulum. Morbi sodales, quam quis tincidunt venenatis, nibh lorem
          viverra velit, ac ultrices ligula nisi id justo. Vestibulum imperdiet
          fermentum ante eu fermentum. Sed et orci pretium, ullamcorper nisi
          nec, dignissim erat. Sed eu consequat neque, interdum malesuada eros.
          Ut maximus gravida malesuada.{" "}
        </p>
        <form name="contact" netlify>
          <p>
            <FormLabel for="name">Name</FormLabel>
            <FormInput type="text" name="name" />
          </p>
          <p>
            <FormLabel for="email">Email</FormLabel>
            <FormInput type="email" name="email" />
          </p>
          <p>
            <Button text="Send Message" type="submit" />
          </p>
        </form>
      </Layout>
    </>
  )
}

export default ContactPage
