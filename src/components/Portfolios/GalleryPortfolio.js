import React from "react"
import styled from "styled-components"
import { useGalleryQuery } from "../../hooks/useGalleryQuery"
import { Section } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledImg = styled(GatsbyImage)`
  // height: 100%;
`

const Wrapper = styled.div`
  background: black;
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 95rem;
  background: black;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  @media screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  & > * {
    // justify-self: center;
    // align-self: center;
  }
`

export default function GalleryPortfolio() {
  const data = useGalleryQuery()
  return (
    <Wrapper>
      <Section>
        <Container>
          <Grid>
            {data.wpPage.ACF_GalleryPage.gallery.map(localFile => {
              return (
                <StyledImg
                  image={localFile.localFile.childImageSharp.gatsbyImageData}
                  alt=""
                  objectFit="contain"
                />
              )
            })}
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  )
}
