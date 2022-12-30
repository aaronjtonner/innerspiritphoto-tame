import React from "react"
import styled from "styled-components"
import { Container, Flex } from "../layoutComponents"
import {
  ButtonPrimary,
  ButtonLight,
  ButtonSecondaryDark,
  ButtonOutlineLight,
} from "../buttons"
import { HeroBannerPadding } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
  padding-bottom: 4em;
  border-bottom: 8px solid var(--clr-light);

  // @media screen and (max-width: 32em) {
  //   padding: 8em 0 4em 0;
  // }

  // @media screen and (max-width: 22em) {
  //   padding: 6em 0 4em 0;
  // }
`

const Text = styled.div`
  h1 {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    font-family: var(--ff-trajan);

    @media screen and (max-width: 34em) {
      font-size: var(--fs-2);
    }

    @media screen and (max-width: 23em) {
      font-size: 1rem;
    }

    @media (min-width: 89em) {
      .span-1 {
        font-size: 3rem;
        line-height: 1;
      }
      .span-2 {
        font-size: 4rem;
      }
      .span-3 {
        font-size: 2rem;
      }
      .span-4 {
        font-size: 3rem;
      }
    }
  }
`

const Video = styled.div`
  @media screen and (max-width: 48em) {
    p {
      display: none;
    }
  }
  // iframe {
  //   height: 550px;
  //   width: 100%;
  //   border-radius: var(--br);
  //   object-fit: cover;

  //   @media screen and (max-width: 400px) {
  //     height: auto;
  //   }
  // }
`

const ActionsDesktop = styled.div`
  display: flex;
  align-items: center;

  & > * {
    width: 100%;
    text-align: center;
  }

  & > * + * {
    margin-left: 10px;
  }

  @media screen and (max-width: 103em) {
    flex-direction: column;
    text-align: center;
    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <HeroBannerPadding />
      <Container>
        <Flex className="spacing-lg">
          <Video className="spacing-lg">
            <div style={{ padding: "100% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/743211780?h=34337a0d72&amp;background=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Home Page 1080p.mp4"
              />
            </div>
            <p className="italics subhead">
              “When I saw my photos, I broke into tears because I thought, I
              can't believe how beautiful that person is.” - Deanna
            </p>
          </Video>

          <Text className="spacing-md">
            <h1 className="">
              <span className="span-1">the best Creative</span>{" "}
              <span className="span-2"></span>{" "}
              <span className="span-3">
                photography in Calgary <br /> for those seeking adventure
              </span>
              <span className="span-4">and empowerment</span>
            </h1>

            <ActionsDesktop>
              <ButtonOutlineLight to="/experience">
                explore the experience &#x2192;
              </ButtonOutlineLight>
              <ButtonPrimary to="/book-now">
                book planning session now &#x2192;
              </ButtonPrimary>
            </ActionsDesktop>
            <Logo>
              <StaticImage
                src="../../images/logo-white.svg"
                alt=""
                width={400}
              />
            </Logo>
          </Text>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
