import React from "react"
import { useContestQuery } from "../../hooks/useContestQuery"
import styled from "styled-components"
import { Section, Container, GridAuto } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)``

export default function ContestAsidePhoto() {
  const data = useContestQuery()
  return (
    <Section>
      <StyledImg
        image={
          data.wpPage.ACF_ContestPage.contestAsidePhoto.localFile
            .childImageSharp.gatsbyImageData
        }
        alt=""
      />
    </Section>
  )
}
