import * as React from "react"

import Layout from "../components/layout"
import HeroSeo from "./landing/HeroSeo"

const IndexPage = () => (
  <Layout isHeaderVisible={false}>
    <HeroSeo title="Langų valymas po statybų"/>
  </Layout>
)

export default IndexPage
