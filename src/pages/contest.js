import React from "react"
import Layout from "../components/layout"
import ContestHero from "../components/Contest/ContestHero"
import BannerImg from "../images/banners/contact-banner.jpg"
import ContestBanner from "../components/banners/bannerContest"
import ContestInfo from "../components/Contest/ContestInfo"
import { ButtonPrimary } from "../components/buttons"
import { Container, Section } from "../components/layoutComponents"
import FormContest from "../components/forms/formContest"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"

export default function Contest() {
  return (
    <Layout>
      <SEO
        title="Contest | Inner Spirit Photography"
        description="This could solve
              your gift-giving need or create a perfect gift for yourself."
      />
      <Helmet>
        {/* <script type='text/javascript' src='https://im322.infusionsoft.com/app/form/iframe/cdd5e6d034dc6adfbcbaa93a74ea5667'></script> */}
      </Helmet>
      <ContestBanner
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/contest"
        link2="Contest"
      />
      {/* <ContestInfo /> */}

      <Section>
        <Container>
          <h1 className="caps">The "Tis The Season" Contest!</h1>
          <div className="spacing">
            <p>
              Yup, that time of year, Christmas on the horizon, This could solve
              your gift-giving need or create a perfect gift for yourself.{" "}
              <br />
              So the contest question is: tell us what the season is for you,
              and how you want to be photographed. <br />
              How daring or bold you would like to be (we understand for some
              women just doing a beauty shot in front of the camera is bold)!{" "}
              <br />
              The most colourful story has the best chance.
              <br />
            </p>
            <p>
              <span className="bold">Prize:</span> <br />
              1st place is our{" "}
              <span className="bold">Connoisseur 2 hour Photo session</span>,
              complete with makeup and hair PLUS an 8 X 10 print – total value
              $565.00
              <br />
              25- 2nd Prize is a{" "}
              <span className="bold">$100 studio gift card</span> good towards a
              portrait session or prints.
              <br />
              Ending & Draw Dates: <br />
              The contest ends on Dec 15, 2022. <br />
              Winner Announcement shortly afterward. <br />
              Read the full rules on our contest Below.
            </p>
          </div>
        </Container>
      </Section>
      <FormContest />
      <Section>
        <center>
          <ButtonPrimary to="/contest-rules">contest rules</ButtonPrimary>
        </center>
      </Section>
    </Layout>
  )
}
