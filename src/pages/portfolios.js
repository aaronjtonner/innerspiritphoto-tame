import React from "react"
import Banner from "../components/banners/bannerPrimary"
import Layout from "../components/layout"
import PortfolioList from "../components/portfolioList"
import CTA from "../components/CTA"
import BannerImg from "../images/banners/portfolio-banner.jpg"
import SEO from "../components/seo"

export default function Portfolios() {
  return (
    <Layout>
      <SEO
        title="Portfolios | Inner Spirit Photography"
        description="Here you'll be able to choose which of our creative portfolios to view!"
      />
      <Banner
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        img={BannerImg}
        alt="our photography portfolios"
        headline="our portfolios"
        description="Thank you so much for making me feel & look beautiful. Never in a million years did I think I would do this!! Most fantastic experience ever!"
        name="- Barb M."
      />
      <PortfolioList />
      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident. A photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful and sexy, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered."
      />
    </Layout>
  )
}
