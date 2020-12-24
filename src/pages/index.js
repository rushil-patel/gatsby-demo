import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bulma/css/bulma.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-1 has-text-dark">sup</h1>
    </div>
  </Layout>
)

export default IndexPage
