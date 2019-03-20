import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useProducts } from "@fancy-react/data"

const SecondPage = () => {
  const products = useProducts()
  const count = products ? products.length : -1
  return (
    <Layout>
      <SEO title="Page two" />
      <div>{count}</div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
