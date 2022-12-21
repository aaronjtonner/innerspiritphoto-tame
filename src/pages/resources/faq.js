import React from "react"
import Layout from "../../components/layout"
import Banner from "../../components/banners/bannerPrimary"
import BannerImg from "../../images/banners/faq-banner-tame.jpg"
import FullFaq from "../../components/faqs/fullFaq"
import FullImageTestimonial from "../../components/testimonials/fullImageTestimonial"
import CTA from "../../components/CTA"

import Christine from "../../images/christine-r-tame.jpg"
import BannerFaq from "../../components/banners/bannerFaq"
import SEO from "../../components/seo"

export default function Faq() {
  return (
    <Layout>
      <SEO
        title="FAQ | Inner Spirit Photography"
        description="Get answers to your questions about photography!"
      />
      <BannerFaq
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/resources"
        link2="Resources"
        link3="FAQ"
        to3="/resources/faq"
        headline="frequently asked questions"
        description="If you are new to beauty photography, we understand you might have some questions. We are confident that we have answers to all your questions on this page. Should you have additional questions, please feel free to contact us."
      />
      <FullFaq />
      <FullImageTestimonial
        img={Christine}
        alt="review of calgary photographer"
        review="Inner Spirit helped me rewrite past traumatic experiences with men where power was taken from me. It was very healing."
        name="christine r."
        to="/experience"
        link="explore the experience &#x2192;"
      />
      <CTA
        headline="take the leap!"
        subhead="We'll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident. A photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered."
      />
    </Layout>
  )
}
