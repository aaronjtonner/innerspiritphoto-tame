import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTAsecondary from "../../components/CTAsecondary"
import CTA from "../../components/CTA"
import BannerImg from "../../images/banners/projects-banner.jpg"
import { Container, Section } from "../../components/layoutComponents"
import styled from "styled-components"
import ProjectsPortfolio from "../../components/Portfolios/ProjectsPortfolio"

const Text = styled.div`
  max-width: 100ch;
  width: 100%;
`

export default function Projects() {
  return (
    <Layout>
      <SEO
        title="Projects | Inner Spirit Photography"
        description="Inner Spirit Photography hosts unique and creative sessions. View our projects here!"
      />
      <BannerSecondary
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        to3="/portfolios/projects"
        link3="Projects"
        headline="projects"
        description="I could do this only because of Mark’s incredible kindred spirit. Thanks for changing my life!"
        name="- Pilar A."
      />
      <ProjectsPortfolio />
      <CTAsecondary />

      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident. A photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered."
      />
    </Layout>
  )
}
