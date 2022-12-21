import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Link } from "gatsby"
import { Container, GridTwo, Section } from "./layoutComponents"

const GridItem = styled(props => <Link {...props} />)`
  display: grid;
  grid-template-rows: auto 2em auto;
  overflow: hidden;
  &:hover {
    .img {
      transform: scale(1.1);
    }
  }

  .img {
    border-radius: var(--br);
    transition: transform 0.5s ease;
    grid-row: 1 / span 2;
    grid-column: 1 / -1;
    z-index: 1;

    max-width: 600px;
    max-height: 600px;
    height: 100%;

    @media screen and (max-width: 48em) {
      object-fit: contain;
    }
  }
`

const ButtonWrapper = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
  justify-self: center;
`

export default function PortfolioList() {
  return (
    <Section>
      <Container>
        <GridTwo>
          <GridItem to="/portfolios/gallery">
            <StaticImage
              className="img"
              src="../images/boudoir-gallery-link.jpg"
              alt="calgary gallery"
            />
            <ButtonWrapper>
              <ButtonPrimary to="/portfolios/gallery">
                see our gallery &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem to="/portfolios/books">
            <StaticImage
              className="img"
              src="../images/boudoir-books-link.jpg"
              alt="calgary books portfolio"
            />
            <ButtonWrapper>
              <ButtonPrimary to="/portfolios/books">
                see our books &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem to="/portfolios/wall-art">
            <StaticImage
              className="img"
              src="../images/boudoir-wall-art-link.jpg"
              alt="calgary wall art"
            />
            <ButtonWrapper>
              <ButtonPrimary to="/portfolios/wall-art">
                see our wall art &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
          <GridItem to="/portfolios/projects">
            <StaticImage
              className="img"
              src="../images/boudoir-projects-link.jpg"
              alt="calgary projects"
            />
            <ButtonWrapper>
              <ButtonPrimary to="/portfolios/projects">
                see our projects &#x2192;
              </ButtonPrimary>
            </ButtonWrapper>
          </GridItem>
        </GridTwo>
      </Container>
    </Section>
  )
}
