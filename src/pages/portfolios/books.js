import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTAsecondary from "../../components/CTAsecondary"
import BooksPortfolio from "../../components/Portfolios/BooksPortfolio"
import CTA from "../../components/CTA"
import BannerImg from "../../images/banners/books-banner.jpg"
import { Container, Section } from "../../components/layoutComponents"
import styled from "styled-components"

const Text = styled.div`
  max-width: 100ch;
  width: 100%;
`

export default function Books() {
  return (
    <Layout>
      <SEO
        title="Books | Inner Spirit Photography"
        description="Inner Spirit Photography can create boudoir books!"
      />
      <BannerSecondary
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        to3="/portfolios/books"
        link3="Books"
        headline="Books"
        description="Thank you for such an awe-inspiring experience. I can honestly believe I am an amazing woman!"
        name="- Judy M."
      />
      <BooksPortfolio />
      <CTAsecondary />
      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident and sexy. A boudoir photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered."
      />
    </Layout>
  )
}
