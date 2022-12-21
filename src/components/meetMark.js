import React from "react"
import { Container, Section, GridAuto, Flex } from "./layoutComponents"
import Mark from "../images/mark-nude-boudoir-photographer-calgary.gif"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { ButtonUnderline } from "./buttons"

const Text = styled.div`
  .button-underline {
    cursor: pointer;
    display: inline-block;
    font-size: var(--fs-sm);
    font-weight: var(--fw-button);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: blue;

    // this is for when an icon is used inside too
    div {
      display: flex;
      align-items: center;

      & > * + * {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
`

const Stats = styled.div`
  color: var(--clr-accent);
  p {
    margin-bottom: 0;
  }
`

const FlexDesktop = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 74em) {
    display: none;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 74em) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const FlexMobile = styled.div`
  display: flex;
  @media screen and (min-width: 74em) {
    display: none;
  }
`

export default function MeetMark() {
  return (
    <Section>
      <Container>
        <FlexDesktop>
          <Text className="spacing">
            <div>
              <h2 className="headline">meet mark laurie</h2>
              <h3 className="subhead upper accent italics">
                your photographer
              </h3>
            </div>
            <p>
              It’s Mark’s intuition and emotional presence with clients that
              makes the Inner Spirit Photography experience life-changing.
            </p>
            <p>
              Mark offered the first photography studio in Calgary and remains
              the best. His imaginative portraits expand beyond the typical
              “lingerie and satin sheets”. Mark’s creatively passionate
              presentation of women has earned him the honour of being the most
              awarded photographer in his niche in Canada. Possibly North
              America.
            </p>
            <p>
              It is common for his clients to be thrilled to have gained much
              more than breathtaking images. They discover a sense of
              reconnecting with themselves. And their images become reminders of
              their beauty, courage and resilience.
            </p>
            <p>
              Be it for a fun adventure or a much deeper need, your experience
              with Mark will touch your soul while showcasing your breathtaking
              beauty, all through his talented skills.
            </p>
            <p>
              He’s not alone, an incredible team of women, along with Jan, his
              partner and wife, makes your time with Mark exceptional.
            </p>
            <a
              className="button-underline"
              href="https://staging.innerspiritphoto.com/about#mark"
            >
              more about mark &#x2192;
            </a>
          </Text>
          <div>
            <img className="stretch" src={Mark} alt="" />
          </div>
        </FlexDesktop>
        <FlexMobile>
          <Text className="spacing">
            <h2 className="headline">
              meet mark laurie, <br />
              <span className="italics accent">your photographer</span>
            </h2>
            <div>
              <img className="stretch" src={Mark} alt="" />
            </div>
            <p>
              It’s Mark’s intuition and emotional presence with clients that
              makes the Inner Spirit Photography experience life-changing.
            </p>
            <p>
              Mark offered the first photography studio in Calgary and remains
              the best. His imaginative portraits expand beyond the typical
              “lingerie and satin sheets”s. Mark’s creatively passionate
              presentation of women has earned him the honour of being the most
              awarded photographer in his niche in Canada. Possibly North
              America.
            </p>
            <p>
              It is common for his clients to be thrilled to have gained much
              more than breathtaking images. They discover a sense of
              reconnecting with themselves. And their images become reminders of
              their beauty, courage and resilience.
            </p>
            <p>
              Be it for a fun adventure or a much deeper need, your experience
              with Mark will touch your soul while showcasing your breathtaking
              beauty, all through his talented skills.
            </p>
            <p>
              He’s not alone, an incredible team of women, along with Jan, his
              partner and wife, makes your time with Mark exceptional.
            </p>
            <a
              className="button-underline"
              href="https://staging.innerspiritphoto.com/about#mark"
            >
              more about mark &#x2192;
            </a>
          </Text>
        </FlexMobile>
      </Container>
    </Section>
  )
}
