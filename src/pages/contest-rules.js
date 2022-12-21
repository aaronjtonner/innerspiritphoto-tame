import React from "react"
import Layout from "../components/layout"
import ContestHero from "../components/Contest/ContestHero"
import BannerImg from "../images/banners/contact-banner.jpg"
import ContestBanner from "../components/banners/bannerContest"
import ContestRulesInfo from "../components/Contest/ContestRulesInfo"
import { Section } from "../components/layoutComponents"
import SEO from "../components/seo"

export default function ContestRules() {
  return (
    <Layout>
      <SEO
        title="Contest Rules | Inner Spirit Photography"
        description="Our contest rules can be found here."
      />
      {/* <ContestBanner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/contest"
        link2="Contest"
      /> */}
      <Section>
        <ContestRulesInfo />
      </Section>
    </Layout>
  )
}
