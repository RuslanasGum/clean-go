import * as React from "react"

import Layout from "../components/layout"
import HeroSeo from "./landing/HeroSeo"

const IndexPage = () => (
  <Layout isHeaderVisible={false}>
    <HeroSeo title="Generalinis valymas"/>
  </Layout>
)

export default IndexPage
